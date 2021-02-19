import axios from "axios";

const initialState = {
  user: {},
  isLoggedIn: false,
  cart: [],
};

const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";
const GET_USER = "GET_USER";
const ADD_TO_CART = "ADD_TO_CART";
const DELETE_FROM_CART = "DELETE_FROM_CART";

export function deleteFromCart(id) {
  return {
    type: DELETE_FROM_CART,
    payload: id,
  };
}

export function loginUser(user) {
  return {
    type: LOGIN_USER,
    payload: user,
  };
}

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
    payload: initialState,
  };
}

export function getUser() {
  const user = axios.get("/auth/user");

  return {
    type: GET_USER,
    payload: user,
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload, isLoggedIn: true };
    case LOGOUT_USER:
      return { ...state, ...action.payload };
    case GET_USER + "_PENDING":
      return state;
    case GET_USER + "_FULFILLED":
      return { ...state, user: action.payload.data, isLoggedIn: true };
    case GET_USER + "_REJECTED":
      return initialState;
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((e) => e.item_id !== action.payload),
      };
    default:
      return initialState;
  }
}
