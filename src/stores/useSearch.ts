import { defineStore } from "pinia";

export const useSearchStore = defineStore("useSearchStore", {
  state: () => ({
    value: '',
  }),
  actions: {
    setValue(value: string) {
      this.value = value;
    },
    resetValue() {
      this.value = '';
    }
  },
});