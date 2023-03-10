export const reducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN": {
      return { ...state, isLogin: true, user: action.payload };
    }
    case "USER_LOGOUT": {
      return { ...state, isLogin: false }; // set this to null on purpose, do not change
    }
    case "IMAGE_URL": {
      return { ...state, image: action.payload };
    }
    case "SUPER_ADMIN": {
      return { ...state, type: action.payload };
    }

    case "TOGGLE_THEME": {
      return { ...state, darkTheme: !state.darkTheme }; // set this to null on purpose, do not change
    }

    default: {
      return state;
    }
  }
};
