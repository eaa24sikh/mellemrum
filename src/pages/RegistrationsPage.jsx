import { useEffect, useState } from "react";
import { getRegistrations } from "../service/API/registrations.js";

export default function RegistrationsPage() {
  const [registrations, setRegistrations] = useState([]);
  const [registrationCount, setRegistrationCount] = useState(0);

  useEffect(() => {
    async function loadRegistrations() {
      const registrationData = await getRegistrations();

      setRegistrations(registrationData);
      setRegistrationCount(registrationData.length);
    }

    loadRegistrations();
  }, []);

  return (
    <>
      <header
        className="admin-header"
        data-route-focus
        tabIndex={-1}
      >
        <p className="eyebrow">Internt overblik</p>
        <h1>Tilmeldinger</h1>
        <p>{registrationCount} tilmeldinger i alt</p>
      </header>

      <main>
        <div className="registration-list">
          <div className="registration-row registration-labels">
            <span>Navn</span>
            <span>Event</span>
            <span>Dato</span>
            <span>Status</span>
          </div>

          {registrations.map((registration) => (
            <div
              className="registration-row"
              key={registration.id}
            >
              <div>
                <strong>{registration.name}</strong>
                <small>{registration.email}</small>
              </div>

              <span>
                {registration.event?.title ?? "Event mangler"}
              </span>

              <span>
                {registration.event?.date
                  ? new Date(
                      registration.event.date
                    ).toLocaleDateString("da-DK")
                  : "Dato mangler"}
              </span>

              <span className="status">
                {registration.status}
              </span>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
