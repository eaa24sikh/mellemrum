import {saveEvent} from "../service/CreateEvent.js"

export default function CreateEvent() {
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
        <p className="create_event_eyebrow">Opret event</p>

        <h1>Opret nyt event</h1>

        <p className="create_event_text">
          Udfyld formularen med informationerne om dit arrangement.
        </p>
      </div>

      <form className="create_event_form">

        <label htmlFor="title">
          Titel
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
        />


        <label htmlFor="summary">
          Opsummering
        </label>
        <textarea
          id="summary"
          name="summary"
          rows="3"
          required
        />


        <label htmlFor="description">
          Beskrivelse
        </label>
        <textarea
          id="description"
          name="description"
          rows="6"
          required
        />


        <label htmlFor="category">
          Kategori
        </label>
        <select
          id="category"
          name="category"
          defaultValue=""
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


        <label htmlFor="vname">
          Venue navn
        </label>
        <input
          type="text"
          id="vname"
          name="vname"
          required
        />


        <label htmlFor="vdate">
          Dato
        </label>
        <input
          type="date"
          id="vdate"
          name="vdate"
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
          placeholder="0"
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
    )
}