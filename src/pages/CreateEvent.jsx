

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
        <p className="eyebrow dark">Opret event</p>
        <h1>Opret nyt event</h1>

        <p>
          Udfyld formularen med informationerne om dit arrangement.
        </p>
      </div>

      <form>
        <label htmlFor="title">Titel</label>
        <input
          className="event_inputS"
          type="text"
          id="title"
          name="title"
        />

        <label htmlFor="summary">Opsummering</label>
        <input
          className="event_inputB"
          type="text"
          id="summary"
          name="summary"
        />

        <label htmlFor="description">Beskrivelse</label>
        <input
          className="event_inputB"
          type="text"
          id="description"
          name="description"
        />

        <label htmlFor="vname">Venue navn</label>
        <input
          className="event_inputS"
          type="text"
          id="vname"
          name="vname"
        />

        <label htmlFor="vdate">Dato</label>
        <input
          className="event_input"
          type="date"
          id="vdate"
          name="vdate"
        />

        <input
          className="event_submit"
          type="submit"
          value="Opret event"
        />
      </form>
    </main>
        </>
    )
}