import axios from "axios";
import { showMessageWithTimeout } from "../messages/actions";

export const cdsInStore = (cds) => {
  return {
    type: "SEARCHED CDS",
    payload: cds,
  };
};

export const fetchApiCds = (cdSearch) => {
  return async (dispatch, getState) => {
    try {
      const res = await axios.get(
        `https://api.discogs.com/database/search?q=${cdSearch}&key=HmGaTeXkcviHzGNiCHqf&secret=FakuvavGDSrjviSRRfIQvdglOKDMqXvm&per_page=75`
      );
      console.log("This is res from new cd", res);
      const cds = res.data.results;
      dispatch(cdsInStore(cds));
      dispatch(
        showMessageWithTimeout(
          "success",
          true,
          `Search for ${cdSearch} completed`
        )
      );
    } catch (e) {
      console.log("error", e);
    }
  };
};
