const initialState = {
    actions: [{
        title: 'WOOD',
        data: [
        {
          title: 'Furnitures',
          data: ['0001'],
        },
        {
          title: 'House Components',
          data: ['0011', '0012', '0013'],
        },
        {
          title: 'Garden',
          data: ['0021'],
        },
      ],
    }]
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'START':
    console.warn(action)
      const {difficulty, companyName } = action.payload;
      return { ...state }
    default:
      return state
  }
}