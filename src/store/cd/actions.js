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
    console.log("what is cds", cds);
    dispatch(addCds(cds));
  } catch (e) {
    console.log("error", e);
  }
}
