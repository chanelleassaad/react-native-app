import {ProfileState} from '../../interfaces/ProfileState';
import {ProfileAction} from './ProfileAction';

const profileReducer = (
  state: ProfileState,
  action: ProfileAction,
): ProfileState => {
  switch (action.type) {
    case 'SET_FIRST_NAME':
      return {...state, firstName: action.payload};
    case 'SET_LAST_NAME':
      return {...state, lastName: action.payload};
    case 'SET_EMAIL_ADDRESS':
      return {...state, emailAddress: action.payload};
    default:
      return state;
  }
};

export default profileReducer;
