const initialState = {
    difficulty: null,
    companyName: '',
    skills: [{
          label: 'Wood',
          value: 10,
        }],
     statistics: [{
          title: 'Total money earned',
          value: 0,
        },
        {
          title: 'Total money spent',
          value: 0,
        },
        {
          title: 'Total play time',
          value: 0,
        },
        ],
      achievements: [{
          title: 'Money',
          image: 'http://www.freeiconspng.com/uploads/money-icon-29.png',
        },
        {
          title: 'Money 2',
          image: 'http://www.freeiconspng.com/uploads/money-icon-29.png',
        }],
      playerProperties: [
        {
          label: 'Money',
          value: 1000,
        },
        {
          label: 'Experience',
          value: 10,
        },
        {
          label: 'Level',
          value: 1,
        },
      ],
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCTION_ELEMENT_SELECTED':
      const { price } = action.payload;
      const playerProperties = state.playerProperties;
      playerProperties.money -= price;
      return { ...state, playerProperties }
    default:
      return state
  }
}