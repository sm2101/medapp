//constants imports
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR,
} from "./../Constants/authConstants";

// interface
interface authInterface {
  isAuthenticated: boolean;
  token: string | null;
  user: {
    name: string;
    email: string;
    role: string;
    img: string;
  } | null;
  loading: boolean;
  errors: object | null;
}
//initial state
const INIT_STATE: authInterface = {
  isAuthenticated: false,
  token: null,
  user: null,
  loading: false,
  errors: null,
};

//reducer
const authReducer = (
  state = INIT_STATE,
  { type, payload }: { type: string; payload: object | null }
) => {
  switch (type) {
    //login
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      const { user, token } = payload;
      return {
        isAuthenticated: true,
        token,
        user,
        loading: false,
        errors: null,
      };
    case LOGIN_USER_ERROR:
      return { ...state, loading: false, errors: payload.errors };

    //logout
    case LOGOUT_USER:
      return { ...state, loading: true };
    case LOGOUT_USER_SUCCESS:
      return {
        isAuthenticated: false,
        token: null,
        user: null,
        loading: false,
        errors: null,
      };
    case LOGOUT_USER_ERROR:
      return { ...state, loading: false, errors: payload.errors };
    default:
      return state;
  }
};

export default authReducer;
