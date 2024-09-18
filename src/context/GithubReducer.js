export const initialValues = {
  users: [],
  error: null,

  loading: false,
};

export function GithubReducer(state, action) {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "ERROR":
      return {
        error: action.payload,

        users: [],
        loading: false,
      };
    case "GETLOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR":
      return {
        error: action.payload,

        users: [],
        loading: false,
      };

    default:
      return state;
  }
}
