import { supabaseConnectionClient } from '../supabaseClient.js'



export async function saveRegistrationToEvent(navnvar, emailvar, eventIdvar) {
  const { data, error } = await supabaseConnectionClient.from('registrations').insert({ name: navnvar, email: emailvar, eventId: eventIdvar })
   
  if (error) {
    console.error("Tilmeldingen kunne ikke gemmes:", error);
    throw error;
  }

    return data
}

export async function getRegistrations() {
    const { data, error } = await supabaseConnectionClient
    .from("registrations")
    .select(`
      id,
      createdAt,
      name,
      email,
      status,
      event:events (
        id,
        title,
        date
      )
    `)
    .order("createdAt", { ascending: false });

  if (error) {
    console.error("Tilmeldingerne kunne ikke hentes:", error);
    throw error;
  }

  return data;

}

