import {
  ARTICLE_FAVORITED,
  ARTICLE_UNFAVORITED,
  SET_PAGE,
  APPLY_TAG_FILTER,
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  CHANGE_TAB,
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED,
  PROFILE_FAVORITES_PAGE_LOADED,
  PROFILE_FAVORITES_PAGE_UNLOADED
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ARTICLE_FAVORITED:
    case ARTICLE_UNFAVORITED:
      return {
        ...state,
        articles: state.articles.map(article => {
          if (article.slug === action.payload.article.slug) {
            return {
              ...article,
              favorited: action.payload.article.favorited,
              favoritesCount: action.payload.article.favoritesCount
            };
          }
          return article;
        }),
        featuredArticles: state.featuredArticles.map(article => {
          if (article.slug === action.payload.article.slug) {
            return {
              ...article,
              favorited: action.payload.article.favorited,
              favoritesCount: action.payload.article.favoritesCount
            };
          }
          return article;
        })
      };
    case SET_PAGE:
      return {
        ...state,
        articles: action.payload.articles,
        articlesCount: action.payload.articlesCount,
        currentPage: action.page
      };
    case APPLY_TAG_FILTER:
      return {
        ...state,
        pager: action.pager,
        articles: action.payload.articles,
        articlesCount: action.payload.articlesCount,
        tab: null,
        tag: action.tag,
        currentPage: 0
      };
    case HOME_PAGE_LOADED:
      var categories = [
        {
          "name": "Festivals",
          "photo": "../assets/images/festivals.png"
        },
        {
          "name": "NightClub",
          "photo": "../assets/images/nightclub.png"
        },
        {
          "name": "Beach Club",
          "photo": "../assets/images/beachclub.png"
        },
        {
          "name": "Pubs",
          "photo": "../assets/images/pubs.png"
        },
        {
          "name": "Bars",
          "photo": "../assets/images/bars.png"
        },
        {
          "name": "Concerts",
          "photo": "../assets/images/concerts.png"
        },
        {
          "name": "Live Music",
          "photo": "../assets/images/livemusic.png"
        }
      ];
      return {
        ...state,
        pager: action.pager,
        categories: action.payload && action.payload.length > 0 ? action.payload[0].categories : categories,
        articles: action.payload && action.payload.length > 1 ? action.payload[1].articles : [],
        articlesCount: action.payload && action.payload.length > 1 ? action.payload[1].articlesCount : [],
        featuredArticles: action.payload && action.payload.length > 0 ? action.payload[1].featuredArticles : [],
        currentPage: 0,
        tab: action.tab,
        articleListLoaded: true
      };
    case HOME_PAGE_UNLOADED:
      return {};
    case CHANGE_TAB:
      return {
        ...state,
        pager: action.pager,
        articles: action.payload.articles,
        articlesCount: action.payload.articlesCount,
        tab: action.tab,
        currentPage: 0,
        tag: null
      };
    case PROFILE_PAGE_LOADED:
    case PROFILE_FAVORITES_PAGE_LOADED:
      return {
        ...state,
        pager: action.pager,
        articles: action.payload[1].articles,
        articlesCount: action.payload[1].articlesCount,
        currentPage: 0,
        articleListLoaded: true
      };
    case PROFILE_PAGE_UNLOADED:
    case PROFILE_FAVORITES_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};
