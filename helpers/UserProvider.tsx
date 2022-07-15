import * as React from "react";
import { supabase } from "../utils/supabaseClient";
import { ReducerState, ReducerAction, Props, UserData } from "../types";
import getProfile from "./get-profile";

const UserContext = React.createContext({});

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
        habits: [action.payload],
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
function UserProvider({ children }: Props) {
  const [state, dispatch] = React.useReducer(userDataReducer, {
    loading: true,
    user: null,
    habits: [],
  });
  React.useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    const currentAuthenticatedUser = await supabase.auth.session();
    
    if ( currentAuthenticatedUser?.user?.id) {
      const user = currentAuthenticatedUser.user;
      const {username, timezone, streak, gems} = await getProfile();
      const userData: UserData = {
        id: user.id,
        email: user.email,
        username: username,
        timezone: timezone,
        streak: streak,
        gems: gems
      }
      dispatch({ type: "SET_USER_DATA", payload: userData });
    }
  };
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
