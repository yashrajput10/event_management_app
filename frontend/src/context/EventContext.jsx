import { createContext, useEffect, useState } from 'react';
import { fetchEvents } from '../services/api';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const { data } = await fetchEvents();
      setEvents(data);
    };
    getEvents();
  }, []);

  return (
    <EventContext.Provider value={{ events }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventContext;
