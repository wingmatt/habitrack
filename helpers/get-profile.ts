import { supabase } from "../utils/supabaseClient";

export default async function getProfile() {
  try {
    const user = supabase.auth.user();
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
    alert(error.message);
  }
}
