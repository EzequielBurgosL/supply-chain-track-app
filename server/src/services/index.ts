import { validateItemData, validateEventData } from './validation';

type Event = { 
  location: string; 
  custodian: string; // person responsible for the item/event
  timestamp: number;
};

interface Item {
  id: string;
  name: string;
  color: string;
  price: number;
  events: Event[];
}

const items: Map<string, Item> = new Map();

export const addItem = (data: Omit<Item, "id" | "events">): { id: string } => {
  validateItemData(data);

  const id = Date.now().toString();
  const newItem: Item = { id, ...data, events: [] };
  items.set(id, newItem);

  return { id };
};

export const modifyItem = (id: string, data: Partial<Item>): Item => {
  if (!items.has(id)) {
    throw new Error(`Item with ID ${id} not found`);
  }

  // Validate the item data (only if certain fields are modified)
  if (data.name || data.color || data.price) {
    validateItemData(data);
  }
  const item = items.get(id)!;
  Object.assign(item, data);
  items.set(id, item);
  return item;
};

export const appendEvent = (id: string, data: Omit<Event, "timestamp">): Event => {
  validateEventData(data);

  if (!items.has(id)) {
    throw new Error(`Item with ID ${id} not found`);
  }
  const item = items.get(id)!;
  const timestamp = Date.now();
  const newEvent: Event = { ...data, timestamp };
  item.events.push(newEvent);

  return newEvent;
};

export const fetchEvents = (id: string): Item["events"] => {
  if (!items.has(id)) {
    throw new Error(`Item with ID ${id} not found`);
  }
  const events = items.get(id)!.events;
  if (events.length === 0) {
    throw new Error(`No events found for item with ID ${id}`);
  }
  return events;
};

export const fetchLastEvent = (id: string): Item["events"][number] | null => {
  if (!items.has(id)) {
    throw new Error(`Item with ID ${id} not found`);
  }
  const events = items.get(id)!.events;
  if (events.length === 0) {
    return null;
  }
  return events[events.length - 1];
};
