import { client } from "../utils/services/fetchClient";

export const authorise = (tgUsername, tgId) => {
  return client.post('/authorize', {id:tgId, tgusername:tgUsername});
};
