import * as React from "react";
import { supabase } from "../utils/supabaseClient";
import { ReducerState, ReducerAction, Props } from "../types";

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
      const userId = currentAuthenticatedUser.user.id;
      dispatch({ type: "SET_USER_DATA", payload: userId });
    } else dispatch({ type: "SET_USER_DATA", payload: null });
  };
  const value = { state, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function usePantry() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error("usePantry must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, usePantry };
