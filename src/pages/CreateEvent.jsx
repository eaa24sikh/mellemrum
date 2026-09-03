import { useState } from "react";
import { saveEvent } from "../service/CreateEvent.js"
import { useNavigate } from "react-router";

export default function CreateEvent() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [venueName, setVenueName] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [venueAddress, setVenueAddress] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(eventSubmit) {
    eventSubmit.preventDefault();

    const result = await saveEvent(
      title,
      summary,
      description,
      date,
      venueName,
      category,
      image,
      price,
      venueAddress
    );
      
    const newEventId = result.data[0].id;

    navigate(`/events/${newEventId}`);
      
      
    
      
      
    
  }

  return (
    <>
      <header className="hero" data-route-focus tabIndex={-1}>
        <p className="eyebrow">Opret event</p>

        <h1>Lav nye minder.</h1>

        <p className="hero-copy">
          Opret events for at skabe minder og relationer for andre.
        </p>
      </header>

      <main className="create_event">
        <div className="create_event_intro">
          <p className="create_event_eyebrow">
            Opret event
          </p>

          <h1>Opret nyt event</h1>

          <p className="create_event_text">
            Udfyld formularen med informationerne om dit arrangement.
          </p>
        </div>

        <form
          className="create_event_form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="title">
            Titel
          </label>

          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(inputEvent) =>
              setTitle(inputEvent.target.value)
            }
            required
          />


          <label htmlFor="summary">
            Opsummering
          </label>

          <textarea
            id="summary"
            name="summary"
            rows="3"
            value={summary}
            onChange={(inputEvent) =>
              setSummary(inputEvent.target.value)
            }
            required
          />


          <label htmlFor="description">
            Beskrivelse
          </label>

          <textarea
            id="description"
            name="description"
            rows="6"
            value={description}
            onChange={(inputEvent) =>
              setDescription(inputEvent.target.value)
            }
            required
          />


          <label htmlFor="category">
            Kategori
          </label>

          <select
            id="category"
            name="category"
            value={category}
            onChange={(inputEvent) =>
              setCategory(inputEvent.target.value)
            }
            required
          >
            <option value="" disabled>
              Vælg kategori
            </option>

            <option value="Musik">Musik</option>
            <option value="Kunst">Kunst</option>
            <option value="Teater">Teater</option>
            <option value="Foredrag">Foredrag</option>
            <option value="Workshop">Workshop</option>
            <option value="Sport">Sport</option>
            <option value="Mad">Mad</option>
            <option value="Kultur">Kultur</option>
            <option value="Andet">Andet</option>
          </select>


          <label htmlFor="venueName">
            Venue navn
          </label>

          <input
            type="text"
            id="venueName"
            name="venueName"
            value={venueName}
            onChange={(inputEvent) =>
              setVenueName(inputEvent.target.value)
            }
            required
          />


          <label htmlFor="date">
            Dato
          </label>

          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(inputEvent) =>
              setDate(inputEvent.target.value)
            }
            required
          />


          <label htmlFor="price">
            Pris
          </label>

          <input
            type="number"
            id="price"
            name="price"
            min="0"
            value={price}
            onChange={(inputEvent) =>
              setPrice(inputEvent.target.value)
            }
            required
          />


          <label htmlFor="image">
            Billede
          </label>

          <input
            type="url"
            id="image"
            name="image"
            placeholder="https://..."
            value={image}
            onChange={(inputEvent) =>
              setImage(inputEvent.target.value)
            }
            required
            />


            <label htmlFor="venueAddress">
            Addresse
          </label>

          <input
            type="text"
            id="venueAddress"
            name="venueAddress"
            value={venueAddress}
            onChange={(inputEvent) =>
              setVenueAddress(inputEvent.target.value)
            }
            required
          />


          <button
            className="create_event_submit"
            type="submit"
          >
            Opret event
          </button>
        </form>
      </main>
    </>
  );
}