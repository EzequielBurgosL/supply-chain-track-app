export type Event = { 
  location: string; 
  custodian: string; // person responsible for the item/event
  timestamp: number;
};

export interface Item {
  id: string;
  name: string;
  color: string;
  price: number;
  events: Event[];
}