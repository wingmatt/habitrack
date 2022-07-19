import { supabase } from "../utils/supabaseClient";
import { HabitInterface } from "../types";

export default async function getProfile() {
  try {
    let { data, error, status } = await supabase
      .from("profiles")
      .select(`username, timezone, streak, gems`)
      .single();

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      return data;
    }
  } catch (error: any) {
    console.error(error.message);
  }
}
const getHabits = async (): Promise<HabitInterface[]> => {
  try {
    let { data } = await supabase
      .from("habits")
      .select(
        "id, owner, accessibleBy, name, description, complete, lastCompleted, daysUntilRepeat, repeatDate, timeOfDay"
      );
    
    if (data) {
      return data;
    } else throw Error;
    
  } catch (error: any) {
    console.error(error.message);
    throw Error;
  }
};

export { getProfile, getHabits };
