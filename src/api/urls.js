export const API_URL = {
  USER: {
    LOGIN: "/user/login",
    REGISTER: "/user/register",
    DEFAULT_ADDRESS: "/user/set-default-address",
  },
  PRODUCT: {
    BY_CATEGORY: "product/all-by-category/:category",
    BY_ID: "product/product-by-id/:productId",
  },
  CART: {
    ADD_PRODUCT: "orders/cart/add-product",
    REMOVE_PRODUCT: "orders/cart/remove-product",
    MY_CART: "orders/cart/my-cart",
    PLACE_ORDER: "/orders/place-order",
    MAKE_PAYMENT: "/orders/make-payment",
    MY_ORDER: "/orders/my-order",
  },
  BUY: {
    ADD_ADDRESS: "user/add-update-address",
    DELETE_ADDRESS: "user/delete-address",
    MY_ADDRESS: "user/my-address",
  },
};

export const WEB_URL = {
  USER: {
    LOGIN: "login",
    REGISTER: "register",
  },
  PRODUCT: {
    MEN: "category/mens",
    WOMEN: "category/womens",
    FOOTWEAR: "category/footwear",
    BEAUTY: "category/beauty-products",
    BAG: "category/bags",
    VIEW: "product-view/:productId",
  },

  CART: "cart",
  ORDER: {
    PLACE_ORDER: "/order-page",
  },
};
