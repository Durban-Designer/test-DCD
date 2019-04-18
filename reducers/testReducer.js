const initialState = {
  title: 'hello home'
}
export default function(state = initialState, action) {
  switch (action.type) {
    case "updateTitle":
      alert(action.payload)
      return {
        ...state,
        title: action.payload
      };
    default:
      return state;
  }
}
