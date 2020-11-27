import axios from "axios";
import { DbUrl } from "../../config/constants";

export function addCds(cds) {
  return {
    type: "ADD CDS",
    payload: cds,
  };
}

export async function fetchCds(dispatch, getState) {
  try {
    const res = await axios.get(`${DbUrl}/cds`);
    const cds = res.data;
    dispatch(addCds(cds));
  } catch (e) {
    console.log("error", e);
  }
}

export const AddCdToDb = (album, year, cdCover, userId) => {
  return async (dispatch, getState) => {
    try {
      const res = await axios.patch(`${DbUrl}/cds/add`);
      console.log("what is res in addcdtodb", res);
    } catch (e) {
      console.log("error", e);
    }
  };
};
