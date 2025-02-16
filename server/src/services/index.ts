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

export const addItem = (data: Omit<Item, "id" | "events">): Item => {
  const id = Date.now().toString();
  const newItem: Item = { id, ...data, events: [] };
  items.set(id, newItem);
  return newItem;
};

export const fetchItems = (): Item[] => {
  return Array.from(items.values());
};

export const modifyItem = (id: string, data: Partial<Item>): Item => {
  if (!items.has(id)) {
    throw new Error(`Item with ID ${id} not found`);
  }
  const item = items.get(id)!;
  Object.assign(item, data);
  items.set(id, item);
  return item;
};

export const appendEvent = (id: string, data: Omit<Event, "timestamp">): Item => {
  if (!items.has(id)) {
    throw new Error(`Item with ID ${id} not found`);
  }
  const item = items.get(id)!;
  const date = Date.now();
  const newItem: Event = { ...data, timestamp: date };
  item.events.push(newItem);
  return item;
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
