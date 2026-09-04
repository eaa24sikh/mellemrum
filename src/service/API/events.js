import { supabaseConnectionClient } from "../supabaseClient.js";

export async function getEvents() {
  const { data, error } = await supabaseConnectionClient
    .from("events")
    .select("*")
    .order("date", { ascending: true });

  if (error) {
    console.error("Kunne ikke hente events:", error);
    return [];
  }

  return data;
}

export async function getEventInfo(eventId) {
  const { data, error } = await supabaseConnectionClient
    .from("events")
    .select("*")
    .eq("id", eventId)
    .maybeSingle();

  if (error) {
    console.error("Kunne ikke hente event:", error);
    return null;
  }

  return data;
}