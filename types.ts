export interface TaskInterface {
  name: string;
  complete: boolean;
  accessibleBy?: string[];
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
