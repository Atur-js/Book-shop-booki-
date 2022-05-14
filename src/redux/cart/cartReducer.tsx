

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

interface CartAction {
  selectedItems: any|object|string[],
  itemsCounter: number,
  total: number,
  checkout: boolean,
  
}

interface AddItemAction {
  type: "ADD_ITEM"
  payload: number | any,
  
}

interface RemoveItemAction {
  type: "REMOVE_ITEM"
  payload:  { id: number }
}

interface IncreaseAction {
  type:  "INCREASE"
  payload: number | any,
}

interface DecreaseAction {
  type:  "DECREASE"
  payload: number | any,
}



interface CheckoutAction {
  type:  "CHECKOUT"
  
}


interface ClearAction {
  type:  "CLEAR"
  
}

type Action = AddItemAction | RemoveItemAction | IncreaseAction | DecreaseAction| CheckoutAction |  ClearAction;


const sumItems = (items: any[]) => {
  const itemsCounter = items.reduce(
    (total: number, product: { quantity: number }) => total + product.quantity,
    0
  );
  let total = items
    .reduce((total: number, product: { price: number; quantity: number; }) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemsCounter, total };
};

const cartReducer = (state: CartAction = initialState, action: Action) => {
  console.log(action.type);
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item: { id: number; }) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
        checkout: false,
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item: { id: number; }) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumItems(newSelectedItems),
      };
    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item: { id: number; }) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };
    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item: { id: number; }) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };
    case "CLEAR":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
      };
    default:
      return state;
  }
};


export default cartReducer;