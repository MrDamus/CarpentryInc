const initialState = {
    items: [{
        source: 'http://lesniczowka.blox.pl/resource/4393.JPG',
        title: 'Wooden blocks',
        price: 100,
        stock: 0,
    },{
        source: 'https://sc01.alicdn.com/kf/UT8cE_dXulaXXaFIFrX5/Plank-Wood-Deski-Tarcica.jpeg',
        title: 'Boards',
        price: 200,
        stock: 0,
    },
    {
        source: 'https://sc01.alicdn.com/kf/UT8cE_dXulaXXaFIFrX5/Plank-Wood-Deski-Tarcica.jpeg',
        title: 'Boards',
        price: 300,
        stock: 0,
    }]
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'START':
    console.warn(action)
      const {difficulty, companyName } = action.payload;
      return { ...state, difficulty, companyName }
    default:
      return state
  }
}