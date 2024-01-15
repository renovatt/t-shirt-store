import { defineStore } from "pinia";

type Item ={
  id: number;
  quantity: number;
  size: string;
  color: string;
}

export const useCartStore = defineStore("useCartStore", {
  state: () => ({
    selectedProduct: {} as Item,
    cart: [] as Item[],
    quantity: 0,
  }),
  actions: {
    setSelectedProduct(product: Item) {
      this.selectedProduct = product;
      this.setCart(product)
    },
    setCart(product: Item) {
      this.cart = [...this.cart, product];
      this.calcQuantity();
    },
    calcQuantity() {
      this.quantity = this.cart.reduce((acc, cur) => acc + cur.quantity, 0);
    },
  }
});