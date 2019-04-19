const initialState = {
  title: 'hello home'
}
export default function(state = initialState, action) {
  switch (action.type) {
    case "updateTitle":
      alert(action.payload); // alerts with correct data
      return {
        ...state,
        title: action.payload // same data but state neveer updates
      };
    default:
      return state;
  }
}
