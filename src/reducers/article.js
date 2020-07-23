import {
  ARTICLE_PAGE_LOADED,
  ARTICLE_PAGE_UNLOADED,
  ADD_COMMENT,
  DELETE_COMMENT,
  ARTICLE_FAVORITED_EACH,
  ARTICLE_UNFAVORITED_EACH,
  UPDATE_FIELD_TICKET,
  PURCHASE_TICKET
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ARTICLE_PAGE_LOADED:
      return {
        ...state,
        article: action.payload && action.payload.length && action.payload[0].article,
        comments: action.payload && action.payload.length && action.payload[1].comments,
        tickets: JSON.parse(JSON.stringify(action.state && action.payload && action.payload.length ? action.state.tickets : action.payload[0].article.tickets)),
        contact: {},
        totalAmount: action.state? action.state.totalAmount : 0,
        articlePageLoaded : true
      };
    case ARTICLE_PAGE_UNLOADED:
      return {};
    case ARTICLE_FAVORITED_EACH:
    case ARTICLE_UNFAVORITED_EACH:
      return {
        ...state,
        article: action.payload.article
      };
    case ADD_COMMENT:
      return {
        ...state,
        commentErrors: action.error ? action.payload.errors : null,
        comments: action.error ?
          null :
          (state.comments || []).concat([action.payload.comment])
      };
    case DELETE_COMMENT:
      const commentId = action.commentId
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== commentId)
      };
    case UPDATE_FIELD_TICKET:
      return { ...state, [action.key]: action.value };
    case PURCHASE_TICKET:
      return {
        ...state,
        purchase : action.payload? action.payload.purchase : null        
      }
    default:
      return state;
  }
};
