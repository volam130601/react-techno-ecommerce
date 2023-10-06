import { Product } from "../entity";

export const saveCartToLocalStorage = (cartItems: Product[]) => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

export const getCartFromLocalStorage = (): Product[] => {
  const cartData = localStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : [];
};
