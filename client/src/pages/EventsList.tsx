import { useState } from 'react';
import { Card } from '../components/card/Card';
import { Layout } from '../components/Layout';
import { getItemEvents } from '../api/itemEvents'
import { Event } from '../models'
import { InputForm } from '../components/inputForm/InputForm';

export function SupplyChain() {
  const [itemId, setItemId] = useState('');
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState('');

  const fetchEvents = async () => {
    setError('');

    if (!itemId.trim()) {
      setError('Please enter a valid item ID.');
      setEvents([]);
      return;
    }

    try {
      const _events = await getItemEvents(itemId);
      setEvents(_events);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Something unexpected happened');
      setEvents([]);
    }
  };

  return (
    <Layout>
      <InputForm callback={fetchEvents} itemId={itemId} setItemId={setItemId} />
      {error && <p className="error">{error}</p>}
      {events.length > 0 ? events.map((event, index) => <Card key={index} item={event} />) : null}
    </Layout>
  );
}
