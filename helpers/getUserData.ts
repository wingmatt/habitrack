import { supabase } from "../utils/supabaseClient";
import { HabitInterface } from "../types";

export default async function getProfile(): Promise<{
  username: string;
  timezone: string;
  streak: number;
  gems: number;
}> {
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
    } else throw error;
  } catch (error: any) {
    console.error(error.message);
    throw error;
  }
}
const getHabits = async (): Promise<HabitInterface[]> => {
  try {
    let { data } = await supabase
      .from("habits")
      .select(
        "id, accessibleBy, name, description, complete, lastCompleted, daysUntilRepeat, timeOfDay"
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
