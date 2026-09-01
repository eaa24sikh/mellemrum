import { supabaseConnectionClient } from './supabaseClient.js'



export async function saveEvent(titlevar, summaryvar, descriptionvar, datevar, venueNamevar, categoryvar, imagevar, pricevar) {
     
   

    const resultData = await supabaseConnectionClient.from('events').insert({ title: titlevar, description: descriptionvar, date: datevar,  venueName: venueNamevar, category: categoryvar, image: imagevar, price: pricevar})
    console.log(resultData)
    
}