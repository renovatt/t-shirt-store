import { ref, reactive } from "vue";

interface SelectedSizes {
  [key: string]: boolean;
}

type Item = {
  id: number;
  quantity: number;
  size: string;
  color: string;
}

const MAX_QUANTITY = 20;
const MIN_QUANTITY = 1;

export const useItem =()=>{
  const item = ref<Item>({} as Item)
  const selectedSizes: SelectedSizes = reactive({})
  const selectedSize = ref('')
  const quantity = ref(MIN_QUANTITY)

  const resetSizes = () => {
    for (const key in selectedSizes) {
      selectedSizes[key] = false;
    }
  }

  const resetQuantity = () => quantity.value = MIN_QUANTITY;
  const resetSelectedSize = () => selectedSize.value = '';
  
  const toggledSize = (size: string) => {
    resetSizes();
    selectedSizes[size] = true;
    selectedSize.value = size;
  }
  
  const upItemQuantity = () => {
    let numQuantity = typeof quantity.value === 'string' ? parseInt(quantity.value) : quantity.value;
    if (numQuantity < MAX_QUANTITY) {
      numQuantity += 1;
      quantity.value = numQuantity;
    }
  }
  
  const lessItemQuantity = () => {
    let numQuantity = typeof quantity.value === 'string' ? parseInt(quantity.value) : quantity.value;
    if (numQuantity > MIN_QUANTITY) {
      numQuantity -= 1;
      quantity.value = numQuantity;
    }
  }
  
  const checkQuantity = () => {
    const numQuantity = typeof quantity.value === 'string' ? parseInt(quantity.value) : quantity.value;
    quantity.value = Math.min(Math.max(numQuantity, MIN_QUANTITY), MAX_QUANTITY);
  }

  return {
    item,
    selectedSizes,
    selectedSize,
    quantity,
    toggledSize,
    upItemQuantity,
    lessItemQuantity,
    checkQuantity,
    resetSizes,
    resetSelectedSize,
    resetQuantity
  }
}