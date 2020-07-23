import {
  EDITOR_PAGE_LOADED,
  EDITOR_PAGE_UNLOADED,
  ARTICLE_SUBMITTED,
  ASYNC_START,
  ADD_TAG,
  REMOVE_TAG,
  UPDATE_FIELD_EDITOR
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case EDITOR_PAGE_LOADED:
      return {
        ...state,
        articleSlug: action.payload ? action.payload.article.slug : '',
        title: action.payload ? action.payload.article.title : '',
        description: action.payload ? action.payload.article.description : '',
        tickets : action.payload ? action.payload.article.tickets : [],
        category: action.payload ? action.payload.article.category : '',
        eventDate: action.payload ? action.payload.article.eventDate : '',
        eventTimeFrom: action.payload ? action.payload.article.eventTimeFrom : '',
        eventTimeTo: action.payload ? action.payload.article.eventTimeTo : '',
        photos: action.payload ? action.payload.article.photos : [],
        locality : action.payload ? action.payload.article.locality : '',
        province : action.payload ? action.payload.article.province : '',
        country : action.payload ? action.payload.article.country : '',
        address : action.payload ? action.payload.article.address : '',
        latitude : action.payload ? action.payload.article.latitude : '',
        longitude : action.payload ? action.payload.article.longitude : '',
        tagInput: '',
        tagList: action.payload ? action.payload.article.tagList : [],
        editorPageLoaded : true
      };
    case EDITOR_PAGE_UNLOADED:
      return {};
    case ARTICLE_SUBMITTED:
      return {
        ...state,
        inProgress: null,
        errors: action.error ? action.payload.errors : null
      };
    case ASYNC_START:
      if (action.subtype === ARTICLE_SUBMITTED) {
        return { ...state, inProgress: true };
      }
      break;
    case ADD_TAG:
      return {
        ...state,
        tagList: state.tagList.concat([state.tagInput]),
        tagInput: ''
      };
    case REMOVE_TAG:
      return {
        ...state,
        tagList: state.tagList.filter(tag => tag !== action.tag)
      };
    case UPDATE_FIELD_EDITOR:
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }

  return state;
};
