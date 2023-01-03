import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';

type EventType = {
  id: number;
  title: string;
  description: string;
  category: string;
  data: string;
};

type EventListProps = {
  eventList: EventType[];
};

export default function EventList({ eventList }: EventListProps) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    const response = await fetch(
      'http://localhost:4000/events?category=sports'
    );
    const data = await response.json();
    setEvents(data);
    router.push('/events?category=sports', undefined, { shallow: true });
  };

  return (
    <>
      <button onClick={fetchSportsEvents}>Sport Events</button>
      <h1>List of Events</h1>
      {events.map((event: EventType) => (
        <div key={event.id}>
          <h2>
            {event.id} {event.title} {event.data} | {event.category}
          </h2>
          <p>{event.description}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { category } = query;
  const queryString = category ? 'category=sports' : '';
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: { eventList: data },
  };
};
