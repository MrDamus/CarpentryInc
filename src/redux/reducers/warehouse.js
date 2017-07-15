const initialState = {
    stock: ['0011'],
    quantity: {
      '0011': 2,
    }
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCTION_ELEMENT_SELECTED':
      const {id} = action.payload;
      const newStock = state.stock.concat([id])
      const quantity = state.quantity;
      quantity[id] = quantity[id] ? quantity[id] + 1 : 1;
      return { ...state, stock: newStock, quantity}
    default:
      return state
  }
}