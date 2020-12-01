import { ADD_CDS, DELETE_CD, UPDATE_FOR_SALE } from "./actions";

const initialState = [];

export default function cdReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CDS: {
      return action.payload;
    }
    case DELETE_CD: {
      const filteredCds = state.filter((cd) => {
        if (cd.id === action.payload) {
          return false;
        } else {
          return true;
        }
      });
      return filteredCds;
    }
    case UPDATE_FOR_SALE: {
      const filteredCds = state.filter((cd) => {
        if (cd.id === action.payload.id) {
          return false;
        } else {
          return true;
        }
      });
      return [...filteredCds, action.payload];
    }
    default: {
      return state;
    }
  }
}
