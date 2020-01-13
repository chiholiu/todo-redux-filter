import { types } from '../actions';

const visibilityFilter = (state = types.ALL, action) => {
  switch (action.type) {
    case 'ALL':
      return action.filter
    case 'COMPLETE':
      return action.filter
    case 'INCOMPLETE':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter