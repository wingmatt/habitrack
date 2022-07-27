import { supabase } from "../utils/supabaseClient";
import { HabitInterface } from "../types";

const createHabit = async (habit: HabitInterface) => {
  // remove id data from the habit object
  //@ts-ignore-next
  try {
    let {data, error} = await supabase
      .from("habits")
      .insert(habit);

    if (data) return data[0];
    if (error) {
      throw error;
    }
    
  } catch (error: any) {
    console.error(error.message);
  }
};
const updateHabit = async (habit: HabitInterface) => {
  try {
    let { data, error: Error } = await supabase
      .from("habits")
      .update(habit)
      .match({ id: habit.id });
    if (Error) {
      throw Error;
    }
    return data[0]
  } catch (Error: any) {
    console.error(Error.message);
  }
};

export { createHabit, updateHabit };
