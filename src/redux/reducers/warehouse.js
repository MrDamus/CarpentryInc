const initialState = {
    stockProducts: ['0011'],
    quantityProducts: {
      '0011': 2,
    },
    stockResources: ['R001', 'R002', 'R011'],
    quantityResources: {
      'R001': 1,
      'R002': 1,
      'R011': 1,
    },
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCTION_ELEMENT_SELECTED':
      const {id} = action.payload;
      const stockProducts = state.stockProducts.concat(id)
      const quantityProducts = state.quantityProducts;
      quantityProducts[id] = quantityProducts[id] ? quantityProducts[id] + 1 : 1;
      return { ...state, stockProducts, quantityProducts}
    case 'BUY_RESOURCE':
      const {id: newId, quantity} = action.payload;
      const stockResources = state.stockResources.concat(newId)
      const quantityResources = state.quantityResources;
      quantityResources[newId] = quantityResources[newId] ? quantityResources[newId] + quantity : quantity;
      return { ...state, stockResources, quantityResources}
    default:
      return state
  }
}