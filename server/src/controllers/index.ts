
import { Request, Response } from "express";
import * as services from "../services";

export const createItem = (req: Request, res: Response) => {
  try {
    const { id } = services.addItem(req.body);
    res.status(201).location(`/items/${id}`).json({ id });;
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: "Failed to create item", error: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export const updateItem = (req: Request, res: Response) => {
  try {
    const updatedItem = services.modifyItem(req.params.id, req.body);
    res.send(updatedItem);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export const addEvent = (req: Request, res: Response) => {
  try {
    const updatedItem = services.appendEvent(req.params.id, req.body);
    res.send(updatedItem);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export const getEvents = (req: Request, res: Response) => {
  try {
    const events = services.fetchEvents(req.params.id);
    res.send(events);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export const getLastEvent = (req: Request, res: Response) => {
  try {
    const lastEvent = services.fetchLastEvent(req.params.id);
    if (!lastEvent) {
      res.status(404).json({ message: `No events found for item with ID ${req.params.id}` });
    } else {
      res.send(lastEvent);
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};
