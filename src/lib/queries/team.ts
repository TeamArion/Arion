import { supabase } from "@/lib/supabase";

export async function getHosMembers() {
  const { data, error } = await supabase
    .from("HoS_members")
    .select("*")
    .order("display_order");

  if (error) throw error;

  return data;
}

export async function getFacultyMentors() {
  const { data, error } = await supabase
    .from("faculty_mentors")
    .select("*")
    .order("display_order");

  if (error) throw error;

  return data;
}