import React, { useState, useEffect } from "react";
import axios from "axios";

function EventVisor() {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [eventsPerPage] = useState(15);
  const highValueStyle = { backgroundColor: "red", color: "white" };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/transactions/all"
        );
        const sortedEvents = response.data.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        setEvents(sortedEvents);
      } catch (error) {
        console.error("Error fetching events", error);
      }
    };

    fetchEvents();
    const intervalId = setInterval(fetchEvents, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const indexOfLastEvent = (currentPage + 1) * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h2>Transacciones Recientes</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Número de Cuenta</th>
            <th>Fecha</th>
            <th>Tipo de Evento</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {currentEvents.map((event) => (
            <tr
              key={event.id}
              style={
                event.amount > 10000 && event.type === "DEPOSIT"
                  ? highValueStyle
                  : null
              }
            >
              <td>{event.id}</td>
              <td>{event.accountNumber}</td>
              <td>{event.timestamp}</td>
              <td>{event.type}</td>
              <td>${event.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          {Array.from(
            { length: Math.ceil(events.length / eventsPerPage) },
            (_, index) => (
              <li key={index} className="page-item">
                <a
                  onClick={() => paginate(index)}
                  href="!#"
                  className="page-link"
                >
                  {index + 1}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
}

export default EventVisor;
