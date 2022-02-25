import { EXAMPLE_ACTION } from './actions'

const initialState = {
  showName: false,
  name: 'Garik'
}

const profileReducer = (state = initialState, action) => {
  switch (action.type){
    case EXAMPLE_ACTION:
      console.log('EXAMPLE_ACTION', action)
      return {
        ...state,
        showName: !state.showName
      }

    default:
      return state;
  }
}

export default profileReducer;
