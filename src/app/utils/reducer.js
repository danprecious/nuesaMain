export const reducer = (state, action) => {
  if (action.type == "toggleNav") {
    return {
      ...state,
      navOpen: action.payload,
    };
  }

  if (action.type == "SET_DATA") {
    return {
      ...state,
      searchData: action.payload,
    };
  }
};
