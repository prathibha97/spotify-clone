export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  // remove after development (null)
  token:
    "BQCmbAqIlLz7yUmoq9rj1Kp6UIT8fLT4sDwSF0nmpeQ-H0AZ-N1Pq77qRFpjdEzGJLOm0xTnjGvCSUcv8G_ltltEF1dHQaQPjmnD5d44fCKL63ZMR0MTMWNlGBs-cOVGzysKDONFJ0Ph1kobnKAo8eVdBU4",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlist,
      };

    default:
      return state;
  }
};

export default reducer;
