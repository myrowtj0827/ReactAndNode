import {
  APP_LOAD,
  REDIRECT,
  LOGOUT,
  ARTICLE_SUBMITTED,
  SETTINGS_SAVED,
  LOGIN,
  REGISTER,
  DELETE_ARTICLE,
  ARTICLE_PAGE_UNLOADED,
  EDITOR_PAGE_UNLOADED,
  HOME_PAGE_UNLOADED,
  PROFILE_PAGE_UNLOADED,
  PROFILE_FAVORITES_PAGE_UNLOADED,
  SETTINGS_PAGE_UNLOADED,
  LOGIN_PAGE_UNLOADED,
  REGISTER_PAGE_UNLOADED,
  PURCHASE_TICKET,
  SWITCH_LOADER,
  SET_ROLE_PERMISSION
} from '../constants/actionTypes';

const defaultState = {
  appName: 'Glosfy',
  token: localStorage.getItem('jwt') || null,
  viewChangeCounter: 0
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_LOAD:
      //debugger;
      return {
        ...state,
        token: action.token || null,
        appLoaded: true,
        currentUser: action.payload && action.payload[0] ? action.payload[0].user || action.payload[0].customer || action.payload[0].company || null : null,
        categories: action.payload && action.payload[1] ? action.payload[1].categories : [],
        loaderState: false,
        loaderText: 'Loading...',
        isCompany:action.payload && action.payload[0] ? action.payload[0].isCompany : state.isCompany ?  state.isCompany : false 
      };
      case REDIRECT:
      return { ...state, redirectTo: null };
    case LOGOUT:
        return { ...state, redirectTo: '/', token: null, currentUser: null };
    case LOGIN:
    //debugger;
      return {
        ...state,
        currentUser: action.error ? null : action.payload.user || action.payload.customer || action.payload.company || null,
        token: (action.payload && action.payload.user && action.payload.user.token) ? action.payload.user.token : null,
        isCompany:action.payload && action.payload ? action.payload.isCompany : state.isCompany ?  state.isCompany : false 
      };
    case REGISTER:
    //debugger;
      return {
        ...state,
        redirectTo: action.error ? null : action.callback ? action.callback : '/',
        token: action.error ? null : action.payload.user.token,
        currentUser: action.error ? null : action.payload.user || action.payload.customer || action.payload.company || null,
        isCompany:action.payload && action.payload ? action.payload.isCompany : state.isCompany ?  state.isCompany : false
      };
    case ARTICLE_SUBMITTED:
      const redirectUrl = `/settings/event/${action.payload.article.slug}`;
      return { ...state, redirectTo: redirectUrl };
    case SETTINGS_SAVED:
      // debugger;
      return {
        ...state,
        // redirectTo: action.error ? null : '/',
        currentUser: action.error ? null : action.payload.user || action.payload.customer || action.payload.company || null,
        isCompany:action.payload && action.payload ? action.payload.isCompany : state.isCompany ?  state.isCompany : false
      };
    
    case DELETE_ARTICLE:
      return { ...state, redirectTo: '/' };
    case ARTICLE_PAGE_UNLOADED:
    case EDITOR_PAGE_UNLOADED:
    case HOME_PAGE_UNLOADED:
    case PROFILE_PAGE_UNLOADED:
    case PROFILE_FAVORITES_PAGE_UNLOADED:
    case SETTINGS_PAGE_UNLOADED:
    case LOGIN_PAGE_UNLOADED:
    case REGISTER_PAGE_UNLOADED:
      return { ...state, viewChangeCounter: state.viewChangeCounter + 1 };
    case PURCHASE_TICKET:
      // debugger;
      return {
        ...state,
        redirectTo: `/event/${action.payload.purchase.article.slug}#purchased`,
        currentUser: action.payload.user || action.payload.customer || action.payload.company || null
        // redirectTo: `/purchase/${action.payload.purchase.slug}`
      }
    case SWITCH_LOADER:
      return {
        ...state,
        loaderState: action.isActive,
        loaderText: (action.loaderText && action.loaderText != '') ? action.loaderText : state.loaderText
      };
    default:
      return state;
  }
};
