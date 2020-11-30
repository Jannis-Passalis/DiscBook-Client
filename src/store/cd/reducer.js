const initialState = [];

export default function cdReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD CDS": {
      return action.payload;
    }
    case "DELETE_CD": {
      const filteredCds = state.filter((cd) => {
        if (cd.id === action.payload) {
          return false;
        } else {
          return true;
        }
      });
      return filteredCds;
    }
    case "UPDATE_FOR_SALE": {
      const filteredCds = state.filter((cd) => {
        if (cd.id === action.payload.id) {
          return false;
        } else {
          return true;
        }
      });
      return [...filteredCds, action.payload]; //still not working (deletes the cd from store)
    }
    default: {
      return state;
    }
  }
}
