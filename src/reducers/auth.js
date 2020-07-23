import {
  LOGIN,
  REGISTER,
  LOGIN_PAGE_UNLOADED,
  REGISTER_PAGE_LOADED,
  REGISTER_PAGE_UNLOADED,
  ASYNC_START,
  REDIRECT,
  LOGOUT,
  SET_ROLE_PERMISSION,
  UPDATE_FIELD_AUTH
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
  
      
    case REGISTER_PAGE_LOADED:
      return {
        ...state,
        categories : action.payload.categories
      }  
    case LOGIN_PAGE_UNLOADED:
    case REGISTER_PAGE_UNLOADED:
      return {};
    case ASYNC_START:
      if (action.subtype === LOGIN || action.subtype === REGISTER) {
        return { ...state, inProgress: true };
      }
      break;
    case UPDATE_FIELD_AUTH:
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }

  return state;
};
