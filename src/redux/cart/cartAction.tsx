const addItem = (product: object) => {
    return {
        type: "ADD_ITEM",
        payload: product
    }
}

const removeItem = (product: object) => {
    return {
        type: "REMOVE_ITEM",
        payload: product
    }
}

const increase = (product: object) => {
  return {
    type: "INCREASE",
    payload: product,
  };
};

const decrease = (product: object) => {
  return {
    type: "DECREASE",
    payload: product,
  };
};

const checkout = () => {
  return {
    type: "CHECKOUT",
  };
};

const clear = () => {
  return {
    type: "CLEAR",
  };
};

export {addItem,removeItem,increase,decrease,checkout,clear};