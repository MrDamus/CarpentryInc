const initialState = {
    stock: ['0011'],
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCTION_ELEMENT_SELECTED':
      const {id} = action.payload;
      const newStock = state.stock.concat([id])
      return { ...state, stock: newStock}
    default:
      return state
  }
}