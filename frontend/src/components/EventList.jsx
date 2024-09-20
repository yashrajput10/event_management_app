import { useContext } from 'react';
import EventContext from '../context/EventContext';

const EventList = () => {
  const { events } = useContext(EventContext);

  return (
    <ul>
      {events.map((event) => (
        <li key={event._id}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>{new Date(event.date).toLocaleDateString()}</p>
        </li>
      ))}
    </ul>
  );
};

export default EventList;
