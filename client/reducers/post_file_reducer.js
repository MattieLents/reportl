export default function (state = [], action) {
  switch (action.type) {
    case 'UPLOAD_FILE':
      return action.payload.data;
    default:
      return state;
  }
}
