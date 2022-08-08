export interface Props {
  children: React.ReactNode;
}


interface SET_USER_DATA {
  type: "SET_USER_DATA";
  payload: UserData | null;
}

interface UPDATE_HABIT {
  type: "UPDATE_HABIT";
  payload: HabitInterface
}

interface DELETE_HABIT {
  type: "DELETE_HABIT";
  payload: string
}

interface SET_HABITS {
  type: "SET_HABITS";
  payload: HabitInterface[]
}

interface UPDATE_ALERT {
  type: "UPDATE_ALERT";
  payload: string
}

export type ReducerAction = SET_USER_DATA | UPDATE_HABIT | DELETE_HABIT | SET_HABITS | UPDATE_ALERT;

export interface ReducerState {
  T: any;
  user: any;
  habits: HabitInterface[];
}

export interface UserData {
  id: string;
  email?: string;
  username: string;
  timezone: string;
  streak: number;
  gems: number;
}
export interface HabitInterface {
  id: string;
  created_at?: string;
  owner: string;
  accessibleBy: string[];
  name: string;
  description?: string;
  complete: boolean;
  lastCompleted: string | null;
  daysUntilRepeat: number;
  repeatDate?: string | null;
  timeOfDay: "morning" | "daytime" | "evening";
}
