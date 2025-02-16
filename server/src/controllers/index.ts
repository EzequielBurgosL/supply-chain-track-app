
import { Request, Response } from "express";
import { addItem, modifyItem, appendEvent, fetchEvents, fetchLastEvent } from "../services";

export const createItem = (req: Request, res: Response) => {
  const newItem = addItem(req.body);
  console.log('req.body: ', req.body);
  res.status(201).send(newItem);
};

export const updateItem = (req: Request, res: Response) => {
  const updatedItem = modifyItem(req.params.id, req.body);
  res.send(updatedItem);
};

export const addEvent = (req: Request, res: Response) => {
  const updatedItem = appendEvent(req.params.id, req.body);
  res.send(updatedItem);
};

export const getEvents = (req: Request, res: Response) => {
  const events = fetchEvents(req.params.id);
  res.send(events);
};

export const getLastEvent = (req: Request, res: Response) => {
  const lastEvent = fetchLastEvent(req.params.id);
  res.send(lastEvent);
};
