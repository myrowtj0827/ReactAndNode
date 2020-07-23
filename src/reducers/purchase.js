import {
  PURCHASE_PAGE_LOADED,
  PURCHASE_PAGE_UNLOADED,
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case PURCHASE_PAGE_LOADED:
      return {
        ...state,
        purchase : action.payload? action.payload.purchase : null,
        purchases : action.payload? action.payload.purchases : []       
      };
    case PURCHASE_PAGE_UNLOADED:
      return {};    
    default:
      return state;
  }
};
