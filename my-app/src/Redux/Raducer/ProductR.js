import { ActionType } from "../ActionType";

const initialaiz = {
  BrandSlug: "apple-phones-48",
  Cart: [],
  List: [],
  total: null,
};

export const ProductR = (state = initialaiz, action) => {
  switch (action.type) {
    case ActionType.GET__PRODUCT__BY__BRAND:
      console.log(action.payload);
      return {
        ...state,
        BrandSlug: action.payload,
      };

    case ActionType.ADD__CART: {
      const newItem = [...state.Cart, action.payload];

      return {
        ...state,
        Cart: newItem,
      };
    }
    case ActionType.REMOVE__ITEM__FROM__CART: {
      const NewItems = state.Cart.filter(
        (item) => item.slug !== action.payload
      );
      return {
        ...state,
        Cart: NewItems,
      };
    }

    case ActionType.REMOVE__ITEM__FROM__LIST: {
      const NewItems = state.List.filter(
        (item) => item.slug !== action.payload
      );
      return {
        ...state,
        List: NewItems,
      };
    }

    case ActionType.GET__TOTAL__PRICE: {
      var totalPrice = 0;

      state.Cart.map((item) => {
        totalPrice = totalPrice + item.price * item.qty;
      });

      return {
        ...state,
        total: totalPrice,
      };
    }

    case ActionType.GET__QTY__AND__UPDATA__TOTAL: {
      const newItem = state.Cart.map((item) => {
        if (item.slug === action.payload.slug) {
          return {
            ...item,
            qty: action.payload.qty,
          };
        }
        return item;
      });
      return {
        ...state,
        Cart: newItem,
      };
    }

    case ActionType.ADD__LIST: {
      const newItem = [...state.List, action.payload];

      return {
        ...state,
        List: newItem,
      };
    }

    default:
      return state;
  }
};
