const initialState = "";

export default (state = initialState, action) => {
  switch (action.type) {
    case "activeMenu":
      return {
        activeMenu: action.value
      };
    default:
      return state;
  }
};
