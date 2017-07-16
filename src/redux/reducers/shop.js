const initialState = {
    items: [{
      id: 'R001',
      stock: 10,
    },
    {
      id: 'R002', 
      stock: 11,
    },
    {
      id: 'R011',
      stock: 11,
    },
  ]
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'START':
    console.warn(action)
      const {difficulty, companyName } = action.payload;
      return { ...state, difficulty, companyName }
    case 'BUY_RESOURCE':
      const {id, quantity} = action.payload;
      const items = state.items;
      items.map((e) => {
        if (e.id === id)
          e.stock -= quantity;
        return e;
      });
      return { ...state, items }
    default:
      return state
  }
}