import * as React from "react";
import { supabase } from "../utils/supabaseClient";
import { ReducerState, ReducerAction, Props, UserData, HabitInterface } from "../types";
import {getProfile, getHabits} from "./getUserData";

const UserContext = React.createContext<
  { state: ReducerState; dispatch: (action: ReducerAction) => void } | undefined
>(undefined);

//TODO: Make TS errors appear here when the action payload is the incorrect type
function userDataReducer(state: ReducerState, action: ReducerAction): any {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "ADD_HABIT":
      return {
        ...state,
        habits: [...state.habits, action.payload],
      };
    case "SET_HABITS":
      return {
        ...state,
        habits: action.payload,
      };
    default: {
      //@ts-ignore-next: TS thinks this will never occur, but we'll keep it in just in case
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
function UserProvider({ children }: Props) {
  const [state, dispatch] = React.useReducer(userDataReducer, {
    loading: true,
    user: undefined,
    habits: [],
  });
  React.useEffect(() => {
    setUserData();
    setHabits();
  }, []);
  const setUserData = async () => {
    const currentAuthenticatedUser = await supabase.auth.session();
    let userData: UserData | null = null;
    if (currentAuthenticatedUser?.user?.id) {
      const user = currentAuthenticatedUser.user;
      const { username, timezone, streak, gems } = await getProfile();
      userData = {
        id: user.id,
        email: user.email,
        username: username,
        timezone: timezone,
        streak: streak,
        gems: gems,
      };
    }
    dispatch({ type: "SET_USER_DATA", payload: userData });
  };
  const setHabits = async () => {
    const habits: HabitInterface[] = await getHabits();
    dispatch({ type: "SET_HABITS", payload: habits });
  }
  const value = { state, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUserData() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserData must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUserData };
