import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { saveRegistrationToEvent } from "../service/API/registrations.js"
import { getEventInfo } from "../service/API/events.js";


export default function EventPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
   

  useEffect(() => {
  async function getEvent() {
    const eventData = await getEventInfo(eventId);
    setEvent(eventData);
  }

    getEvent();
  }, [eventId]);

  async function handleSubmit(eventSubmit) {
    eventSubmit.preventDefault();
   



    const result = await saveRegistrationToEvent(name, email, event["id"])
    
    setName("");
    setEmail("");

    setMessage("Du er nu tilmeldt eventet!");

  }


  if (!event) {
    return null;
  }

  const date = new Date(event.date);


  

  return (
    <>
      <main className="event-page" data-route-focus tabIndex={-1}>
        <Link className="back-link" to="/">
          ← Alle events
        </Link>

        <section className="event-detail">
          <img src={event.image} alt="" loading="lazy"/>
          <div className="event-detail-content">
            <p className="event-category">{event.category}</p>
            <h1>{event.title}</h1>
            <p className="lead">{event.summary}</p>
            <div className="detail-list">
              <p>
                <strong>Dato</strong>
                {date.toLocaleDateString("da-DK", { weekday: "long", day: "numeric", month: "long" })} kl.{" "}
                {date.toLocaleTimeString("da-DK", { hour: "2-digit", minute: "2-digit" })}
              </p>
              <p>
                <strong>Sted</strong>
                <span>
                  {event.venueName}
                  <br />
                  {event.venueAddress}, {event.venuePostalCode} {event.venueCity}
                  {event.venueWebsite && (
                    <>
                      <br />
                      <a href={event.venueWebsite}>Besøg venue</a>
                    </>
                  )}
                </span>
              </p>
              <p>
                <strong>Pris</strong>
                {event.price === 0 ? "Gratis" : `${event.price} kr.`}
              </p>
            </div>
            <p>{event.description}</p>
          </div>
        </section>

        <section className="signup-panel">
          <div>
            <p className="eyebrow dark">Tilmelding</p>
            <h2>Reserver din plads</h2>
            <p>Udfyld formularen, så sender vi din tilmelding til arrangøren.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <label>
              Navn
              <input id="name" value={name} type="text" onChange={(inputEvent) => setName(inputEvent.target.value)} required/>
            </label>
           <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" required value={email} onChange={(inputEvent) => setEmail(inputEvent.target.value)}
          />
            <button type="submit">Tilmeld mig</button>

            {message && (
              <p className="signup-message">
                {message}
              </p>
            )}

          </form>
        </section>
      </main>
      
    </>
  );
}
