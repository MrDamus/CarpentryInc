const initialState = {
    difficulty: null,
    companyName: '',
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