export default function (state = [], action) {
  console.log('Selected Class', action.payload);
  switch (action.type) {
    case 'SET_SELECTED_CLASS':
      return action.payload;
    default:
      return state;
  }
}
