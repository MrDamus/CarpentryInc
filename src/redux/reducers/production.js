const initialState = {
    actions: [{
        title: 'WOOD',
        data: [
        {
          title: 'Furnitures',
          data: [{
            id: '0001',
            title: 'Chair',
            img: 'http://piq.codeus.net/static/media/userpics/piq_114455_400x400.png',
            price: 30,
          }],
        },
        {
          title: 'House Components',
          data: [{
            id: '0011',
            title: 'Doors',
            img: 'http://piq.codeus.net/static/media/userpics/piq_95922_400x400.png',
            price: 50,
          },
          {
            id: '0012',
            title: 'Window',
            img: 'http://piq.codeus.net/static/media/userpics/piq_3899_400x400.png',
          },
          {
            id: '0013',
            title: 'Floor',
            img: 'http://piq.codeus.net/static/media/userpics/piq_216430_400x400.png',
          },
          ],
        },
        {
          title: 'Garden',
          data: [{
            id: '0021',
            title: 'Table',
            img: 'http://piq.codeus.net/static/media/userpics/piq_253123_400x400.png',
            price: 40,
          },
         ],
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