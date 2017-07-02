const initialState = {
    stock: [
        {
          img: 'http://www.jqueryscript.net/images/jQuery-Plugin-For-Fullscreen-Image-Viewer-Chroma-Gallery.jpg',
        },
      ],
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