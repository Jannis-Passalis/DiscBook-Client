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
    default: {
      return state;
    }
  }
}
