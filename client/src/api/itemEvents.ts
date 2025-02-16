import { Event } from '../models';
import apiClient, { handleApiErrorResponse } from './apiClient';

export const getItemEvents = async (id: string) => {
  try {
    const response = await apiClient.get<Event[]>(`/items/${id}/events`);
    return response.data;
  } catch (error) {
    return handleApiErrorResponse(error);
  }
};