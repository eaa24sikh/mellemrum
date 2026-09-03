import { supabaseConnectionClient } from './supabaseClient.js'



export async function saveRegistrationToEvent(navnvar, emailvar, eventIdvar) {
     
   

    const resultData = await supabaseConnectionClient.from('registrations').insert({ name: navnvar, email: emailvar, eventId: eventIdvar })
   
    
}