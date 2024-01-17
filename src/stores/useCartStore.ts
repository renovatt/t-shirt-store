import type { CartItem } from "@/@types";
import { defineStore } from "pinia";

const MAX_QUANTITY_PER_PRODUCT = 20;

export const useCartStore = defineStore("useCartStore", {
  state: () => ({
    selectedProduct: {} as CartItem,
    cart: [] as CartItem[],
    quantity: 0,
    total: 0,
    messages: {
      success: '',
      error: ''
    }
  }),
  actions: {
    setSelectedProduct(product: CartItem, quantity: number = 1) {
      const existingProductIndex = this.cart.findIndex((item) => item.id === product.id);

      if (existingProductIndex !== -1) {
        const existingProduct = this.cart[existingProductIndex];
        if (existingProduct.quantity + quantity <= MAX_QUANTITY_PER_PRODUCT) {
          const updatedProduct = { ...existingProduct, quantity: existingProduct.quantity + quantity };
          this.cart.splice(existingProductIndex, 1, updatedProduct);
          this.success('Adicionado ao carrinho');
        } else {
          this.error(`Maximo de ${MAX_QUANTITY_PER_PRODUCT} itens por produto`);
        }
      } else {
        if (quantity <= MAX_QUANTITY_PER_PRODUCT) {
          this.setCart(product, quantity);
        } else {
          this.error(`Maximo de ${MAX_QUANTITY_PER_PRODUCT} itens por produto`);
        }
      }

      this.selectedProduct = product;
      this.calcQuantityAndTotal();
    },
    setCart(product: CartItem, quantity: number = 1) {
      this.cart = [...this.cart, { ...product, quantity }];
      this.calcQuantityAndTotal();
      this.success('Adicionado ao carrinho');
    },
    removeItem(id: number) {
      this.cart = this.cart.filter((item) => item.id !== id);
      this.calcQuantityAndTotal();
      this.success('Removido do carrinho');
    },
    clearCart() {
      this.cart = [];
      this.quantity = 0;
      this.total = 0;
      this.success('Itens removidos');
    },
    calcQuantityAndTotal() {
      this.quantity = this.cart.reduce((acc, cur) => acc + cur.quantity, 0);
      this.total = this.cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);
    },
    success(message: string) {
      this.messages.success = message;
    },
    error(message: string) {
      this.messages.error = message;
    }
  }
});