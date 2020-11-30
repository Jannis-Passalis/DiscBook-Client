import axios from "axios";
import { DbUrl } from "../../config/constants";
import { setMessage, showMessageWithTimeout } from "../messages/actions";

export function addCds(cds) {
  return {
    type: "ADD CDS",
    payload: cds,
  };
}

export function deleteCdFromStore(cdId) {
  return {
    type: "DELETE_CD",
    payload: cdId,
  };
}

export function updateForSale(cd) {
  return {
    type: "UPDATE_FOR_SALE",
    payload: cd,
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
  const token = localStorage.getItem("token");
  return async (dispatch, getState) => {
    try {
      const res = await axios.post(
        `${DbUrl}/cds/add`,
        {
          album,
          year,
          cdCover,
          userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(
        "logging to get rid of warning, until message is added / ADD",
        res
      );
      dispatch(showMessageWithTimeout("success", true, "The CD is added"));
    } catch (error) {
      if (error.response) {
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
      }
    }
  };
};

export const DeleteCdFromDb = (cdId) => {
  const token = localStorage.getItem("token");
  return async (dispatch, getState) => {
    try {
      const res = await axios.delete(`${DbUrl}/cds/delete/${cdId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(
        "logging to get rid of warning, until message is added / DELETE",
        res
      );
      dispatch(deleteCdFromStore(cdId));
      dispatch(
        showMessageWithTimeout(
          "success",
          true,
          "The CD is successfully deleted"
        )
      );
    } catch (error) {
      if (error.response) {
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
      }
    }
  };
};

export const ChangeSellingOption = (cdId) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    console.log("what is token", token);
    try {
      const res = await axios.patch(
        `${DbUrl}/cds/sell/update/${cdId}`,
        {
          cdId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("what is res in change selling option", res);
      dispatch(updateForSale(res.data.findCd));
      dispatch(
        showMessageWithTimeout("success", true, "Selling option is updated")
      );
    } catch (error) {
      if (error.response) {
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
      }
    }
  };
};
