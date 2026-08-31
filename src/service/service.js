import { supabaseConnectionClient } from './supabaseClient.js'



export async function saveRegistrationToEvent(navnvar, emailvar, eventvar) {
     
    console.log(navnvar)
    console.log(eventvar)

    const resultData = await supabaseConnectionClient.from('registrations').insert({ name: navnvar, email: emailvar, eventTitle: eventvar.title, eventDate: eventvar.date, eventLocation: eventvar.venueName })
    console.log(resultData)
    
}