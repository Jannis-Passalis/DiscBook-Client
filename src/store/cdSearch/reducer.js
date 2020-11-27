const initialState = [];

export default function cdSearchReducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCHED CDS": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
