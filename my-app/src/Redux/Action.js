import { ActionType } from "./ActionType";
import { auth } from "../Configs/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { async } from "@firebase/util";

/* Login and Registration Actions */

export const registerStart = () => {
  return {
    type: ActionType.REGISTER__START,
  };
};
export const registerSuccess = (user) => {
  return {
    type: ActionType.REGISTER__SUCCSESS,
    payload: user,
  };
};

export const registerError = (error) => {
  return {
    type: ActionType.REGISTER__ERROR,
    payload: error,
  };
};

export const loginStart = () => {
  return {
    type: ActionType.LOGIN__START,
  };
};
export const loginSuccess = (user) => {
  return {
    type: ActionType.LOGIN__SUCCSESS,
    payload: user,
  };
};

export const loginError = (error) => {
  return {
    type: ActionType.LOGIN__ERROR,
    payload: error,
  };
};

export const logoutStart = () => {
  return {
    type: ActionType.LOGOUT__START,
  };
};
export const logoutSuccess = () => {
  return {
    type: ActionType.LOGOUT__SUCCSESS,
  };
};

export const logoutError = (error) => {
  return {
    type: ActionType.LOGOUT__ERROR,
    payload: error,
  };
};

export const registerInitiat = (email, password) => {
  return async function (dispatch) {
    dispatch(registerStart());
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(registerSuccess(user));
      })
      .catch((error) => {
        dispatch(registerError(error));
      });
  };
};

export const logininitial = (email, password) => {
  return async function (dispatch) {
    dispatch(loginStart());
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
      })
      .catch((error) => {
        dispatch(loginError(error));
      });
  };
};
export const logoutinitial = () => {
  console.log("Logout");
  return async function (dispatch) {
    dispatch(logoutStart());
    signOut(auth)
      .then((resp) => dispatch(logoutSuccess()))
      .catch((error) => dispatch(logoutError(error)));
  };
};

/*Get Product  Actions*/

export const getProductbyBrand = (Brand) => {
  return {
    type: ActionType.GET__PRODUCT__BY__BRAND,
    payload: Brand,
  };
};

export const addCart = (Item) => {
  console.log("AddCart");
  console.log(Item);
  const qty = 1;
  const newItem = { ...Item, qty };
  return {
    type: ActionType.ADD__CART,
    payload: newItem,
  };
};

export const addList = (item) => {
  return {
    type: ActionType.ADD__LIST,
    payload: item,
  };
};

export const removeItemfromCart = (id) => {
  return {
    type: ActionType.REMOVE__ITEM__FROM__CART,
    payload: id,
  };
};
export const removeItemfromList = (id) => {
  return {
    type: ActionType.REMOVE__ITEM__FROM__LIST,
    payload: id,
  };
};

export const getTotalPrice = (items) => {
  return {
    type: ActionType.GET__TOTAL__PRICE,
  };
};

export const getQtyandUpdataTotal = (qty, slug) => {
  return {
    type: ActionType.GET__QTY__AND__UPDATA__TOTAL,
    payload: { qty, slug },
  };
};
