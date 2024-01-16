import type { CartItem } from "@/@types";
import { defineStore } from "pinia";

export const useCartStore = defineStore("useCartStore", {
  state: () => ({
    selectedProduct: {} as CartItem,
    cart: [] as CartItem[],
    quantity: 0,
  }),
  actions: {
    setSelectedProduct(product: CartItem) {
      this.selectedProduct = product;
      this.setCart(product)
    },
    setCart(product: CartItem) {
      this.cart = [...this.cart, product];
      this.calcQuantity();
    },
    calcQuantity() {
      this.quantity = this.cart.reduce((acc, cur) => acc + cur.quantity, 0);
    },
    removeItem(id: number) {
      this.cart = this.cart.filter((item) => item.id !== id);
      this.calcQuantity();
    },  
  }
});