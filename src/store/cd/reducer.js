const initialState = [];

export default function cdReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD CDS": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
