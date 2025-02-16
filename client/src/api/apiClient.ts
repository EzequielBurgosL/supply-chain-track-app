import axios from 'axios';
import { loggerService } from '../utils/loggerService';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const handleApiErrorResponse = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    loggerService.error("Error fetching events", error);

    if (error.response) {
      throw new Error(error.response.data.message || `Request failed with status ${error.response.status}`);
    } else if (error.request) {
      throw new Error("No response received from the server");
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
  throw new Error("Unknown error occurred");
}

export default apiClient;
