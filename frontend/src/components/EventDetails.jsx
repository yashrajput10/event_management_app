const EventDetails = ({ event }) => {
    return (
      <div>
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <p>{new Date(event.date).toLocaleDateString()}</p>
      </div>
    );
  };
  
  export default EventDetails;
  