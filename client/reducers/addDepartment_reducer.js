export default function (state = [], action) {
  switch (action.type) {
    case 'CREATE_DEPARTMENT':
      return action.payload;
    default:
      return state;
  }
}
