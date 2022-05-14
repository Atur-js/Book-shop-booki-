const shorten = (title: string) => {
    const splitedTitle = title.split(" ");
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`
    return newTitle;
}

const isInCart = (state: { selectedItems: any[] }, id: number) => {
    const result = !!state.selectedItems.find((item: { id: number }) => item.id === id)
    return result;
}

const quantityCount = (state: { selectedItems: any[] }, id: number) => {
    const index = state.selectedItems.findIndex((item: { id: number }) => item.id === id);
    if (index === -1) {
        return false
    } else {
        return state.selectedItems[index].quantity;
    }
}

export {shorten, isInCart, quantityCount};