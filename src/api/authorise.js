import { client } from "../utils/services/fetchClient";

export const authorise = () => {
  return client.post('/authorize', true);
};
