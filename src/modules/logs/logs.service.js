import { Log } from "../../DB/model/log.model.js";
export const createLog = async (data) => {
  const log = await Log.create(data);
  return {
    acknowledged: true,
    insertedId: log._id,
  };
};
