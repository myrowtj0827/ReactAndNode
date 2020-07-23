import { HOME_PAGE_LOADED, HOME_PAGE_UNLOADED } from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
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
        categories: action.payload && action.payload.length > 0 ? action.payload[0].categories : categories,
        homePageLoaded: true,
      };
    case HOME_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};
