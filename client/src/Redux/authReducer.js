let userState;

if (window.localStorage.getItem("auth")) {
  userState = (window.localStorage.getItem("auth"));
} else {
  userState = null;
}

export const authReducer = (state = userState, action) => {
  switch (action.type) {
    case "LOG_IN_USER":
      return { ...state, ...action.payload };
    case "LOG_OUT":
      return action.payload;
    default:
      return state;
  }
};
