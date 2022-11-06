const heroReducer = (state, action) => {
  if (action.type === "Home") {
    return {
      ...state,
      name: action.name,
      designation: action.designation,
    };
  }
  if (action.type === "About") {
    return {
      ...state,
      name: action.name,
      designation: action.designation,
    };
  }

  return state;
};

export default heroReducer;
