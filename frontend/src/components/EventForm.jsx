import { useState } from 'react';
import { createEvent } from '../services/api';

const EventForm = () => {
  const [eventData, setEventData] = useState({ title: '', description: '', date: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEvent(eventData);
    setEventData({ title: '', description: '', date: '' });
  };

  return (
    <>
    
    <form onSubmit={handleSubmit}>
    <h3>Events Form</h3>
      <input
        type="text"
        placeholder="Event Title"
        value={eventData.title}
        onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
      />
      <input
        placeholder="Event Description"
        value={eventData.description}
        onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
      />
      <input
        type="date"
        value={eventData.date}
        onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
      />
      <button type="submit">Create </button>
    </form>
    </>
  );
};

export default EventForm;
