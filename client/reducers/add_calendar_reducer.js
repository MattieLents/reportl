export default function (state = [], action) {
  switch (action.type) {
    case 'GET_CALENDAR':
      // return [action.payload, ...state];
      return action.payload.data;
    default:
      return state;
  }
}
