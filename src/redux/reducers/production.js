const initialState = {
    actions: [{
        title: 'WOOD',
        data: [
        {
          title: 'Furnitures',
          data: [{
            img: 'http://www.jqueryscript.net/images/jQuery-Plugin-For-Fullscreen-Image-Viewer-Chroma-Gallery.jpg',
          }],
        },
        {
          title: 'House Components',
          data: [{
            img: 'http://www.jqueryscript.net/images/jQuery-Plugin-For-Fullscreen-Image-Viewer-Chroma-Gallery.jpg',
          },
          {
            img: 'http://www.jqueryscript.net/images/jQuery-Plugin-For-Fullscreen-Image-Viewer-Chroma-Gallery.jpg',
          },
          {
            img: 'http://www.jqueryscript.net/images/jQuery-Plugin-For-Fullscreen-Image-Viewer-Chroma-Gallery.jpg',
          },
          ],
        },
        {
          title: 'Garden',
          data: [{
            img: 'http://www.jqueryscript.net/images/jQuery-Plugin-For-Fullscreen-Image-Viewer-Chroma-Gallery.jpg',
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