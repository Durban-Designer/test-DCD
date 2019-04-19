const initialState = {
  title: 'Home'
}
export default function(state = initialState, action) {
  switch (action.type) {
    case "updateTitle":
      return {
        ...state,
        title: action.payload
      };
    default:
      return state;
  }
}
