
interface Item {
  id: string;
  name: string;
  color: string;
  price: number;
  events: { location: string; custodian: string; date: Date }[];
}

const items: Map<string, Item> = new Map();

export const addItem = (data: Omit<Item, "id" | "events">): Item => {
  const id = Date.now().toString();
  const newItem: Item = { id, ...data, events: [] };
  items.set(id, newItem);
  return newItem;
};

export const modifyItem = (id: string, data: Partial<Item>): Item => {
  if (!items.has(id)) throw new Error("Item not found");
  const item = items.get(id)!;
  Object.assign(item, data);
  items.set(id, item);
  return item;
};

export const appendEvent = (id: string, event: { location: string; custodian: string; date: Date }): Item => {
  if (!items.has(id)) throw new Error("Item not found");
  const item = items.get(id)!;
  item.events.push(event);
  return item;
};

export const fetchEvents = (id: string): Item["events"] => {
  if (!items.has(id)) throw new Error("Item not found");
  return items.get(id)!.events;
};

export const fetchLastEvent = (id: string): Item["events"][number] | null => {
  if (!items.has(id)) throw new Error("Item not found");
  const events = items.get(id)!.events;
  return events.length ? events[events.length - 1] : null;
};