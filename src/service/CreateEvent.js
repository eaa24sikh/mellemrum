import { supabaseConnectionClient } from "./supabaseClient.js";


export async function saveEvent(
  titlevar,
  summaryvar,
  descriptionvar,
  datevar,
  venueNamevar,
  categoryvar,
  imagevar,
  pricevar,
  venueAddressvar
) {
  const resultData = await supabaseConnectionClient
    .from("events")
    .insert({
      title: titlevar,
      summary: summaryvar,
      description: descriptionvar,
      date: datevar,
      venueName: venueNamevar,
      category: categoryvar,
      image: imagevar,
      price: pricevar,
      venueAddress: venueAddressvar
   })
  .select("id");
  //console.log(resultData.data[0].id);

    return resultData;
}