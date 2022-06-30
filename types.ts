export interface TaskInterface {
  name: string;
  complete: boolean;
  accessibleBy?: string[];
}

export interface Props {
  children: React.ReactNode;
}
export interface ReducerAction {
  type: "SET_USER_DATA" | "ADD_HABIT" | "SET_HABITS";
  payload: ReducerState | HabitInterface[] | HabitInterface;
}
export interface ReducerState {
  T: any
  user: any,
  habits: HabitInterface[]
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
