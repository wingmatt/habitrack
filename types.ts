export interface TaskInterface {
  name: string,
  complete: boolean,
  accessibleBy?: string[]
}

export interface HabitInterface {
  id: string,
  created_at?: string,
  owner: string,
  accessibleBy: string[],
  name: string,
  description?: string,
  complete: boolean,
  lastCompleted: Date | null,
  daysUntilRepeat: number
  timeOfDay: "morning" | "daytime" | "evening"
}