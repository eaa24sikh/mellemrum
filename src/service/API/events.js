import { supabaseConnectionClient } from "../supabaseClient.js";

export default async function getEventInfo(eventId) {
  const { data, error } = await supabaseConnectionClient
    .from("events")
    .select("*")
    .eq("id", eventId)
    .single();

  if (error) {
    console.error("Kunne ikke hente event:", error);
    return null;
  }

  return data;
}