import { supabase } from "../utils/supabaseClient";
import { HabitInterface } from "../types";
const createHabit = async (habit: HabitInterface): Promise<HabitInterface> => {
  try {
    let { data: HabitInterface, error: any } = await supabase
      .from("habits")
      .insert(habit);
    if (error) {
      throw error;
    }
    return data;
  } catch (error: any) {
    console.error(error.message);
  }
};
const updateHabit = async (habit: HabitInterface): Promise<void> => {
  try {
    let { error: Error } = await supabase
      .from("habits")
      .update(habit)
      .match({ user_id: habit.id });
    if (Error) {
      throw Error;
    }
  } catch (Error: any) {
    console.error(Error.message);
  }
};

export { createHabit, updateHabit };
