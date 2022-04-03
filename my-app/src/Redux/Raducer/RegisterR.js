import { ActionType } from "../ActionType";

const initialaiz = {
  loading: false,
  user: null,
  error: null,
};

export const RegisterR = (state = initialaiz, action) => {
  switch (action.type) {
    case ActionType.REGISTER__START:
    case ActionType.LOGIN__START:
    case ActionType.LOGOUT__START:
      return {
        ...state,
        loading: true,
      };

    case ActionType.REGISTER__SUCCSESS:
    case ActionType.LOGIN__SUCCSESS:
      return {
        ...state,
        loading: false,
        erorr: null,
        user: action.payload,
      };

    case ActionType.LOGOUT__SUCCSESS:
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
      };

    case ActionType.REGISTER__ERROR:
    case ActionType.LOGIN__ERROR:
    case ActionType.LOGOUT__ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
