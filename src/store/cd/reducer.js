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
      return state; //still have to work on this one
    }
    default: {
      return state;
    }
  }
}
