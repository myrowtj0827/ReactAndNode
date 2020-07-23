// import ArticleList from '../ArticleList';
// import React from 'react';
// import agent from '../../agent';
// import { connect } from 'react-redux';
// import { CHANGE_TAB } from '../../constants/actionTypes';

// const YourFeedTab = props => {
//   if (props.token) {
//     const clickHandler = ev => {
//       ev.preventDefault();
//       props.onTabClick('feed', agent.Articles.feed, agent.Articles.feed());
//     }

//     return (
//       <li className="nav-item">
//         <a  href=""
//             className={ props.tab === 'feed' ? 'nav-link active' : 'nav-link' }
//             onClick={clickHandler}>
//           Your Feed
//         </a>
//       </li>
//     );
//   }
//   return null;
// };

// const GlobalFeedTab = props => {
//   const clickHandler = ev => {
//     ev.preventDefault();
//     props.onTabClick('all', agent.Articles.all, agent.Articles.all());
//   };
//   return (
//     <li className="nav-item">
//       <a
//         href=""
//         className={ props.tab === 'all' ? 'nav-link active' : 'nav-link' }
//         onClick={clickHandler}>
//         Global Feed
//       </a>
//     </li>
//   );
// };

// const TagFilterTab = props => {
//   if (!props.tag) {
//     return null;
//   }

//   return (
//     <li className="nav-item">
//       <a href="" className="nav-link active">
//         <i className="ion-pound"></i> {props.tag}
//       </a>
//     </li>
//   );
// };

// const mapStateToProps = state => ({
//   ...state.articleList,
//   tags: state.home.tags,
//   token: state.common.token
// });

// const mapDispatchToProps = dispatch => ({
//   onTabClick: (tab, pager, payload) => dispatch({ type: CHANGE_TAB, tab, pager, payload })
// });

// const MainView = props => {
//   var category = 'Events';
//   var location = 'near you';
//   var params = props.params.search && props.params.search.split('&') || [];
//   if ( params && params.length > 0) {
//     category = params[2].split('=')[1]
//     if (category == '')
//       category = 'Events';
//     if (params[0] != 'location=')
//       location = 'in ' + params[0].replace('location=', '').split('-')[0];
//   }

//   var featuredArticles = props.featuredArticles;

//   return (
//     <div className="col-md-9 col-xs-12 article-list">
//       { params.length == 0 && !props.params.tag && props.local && (
//           <h2>Recommended for you { props.curCountry  && ('in ' + props.curCountry) }</h2>
//       )}      
//       {/* props.params.tag && (
//           <h2>Events by { props.params.tag }</h2>
//       )*/}
//       { params.length > 0 && (
//           <h2>Popular { category } { location }</h2>
//       )}
//       {/*
//           <div className="feed-toggle">
//             <ul className="nav nav-pills outline-active">

//               <GlobalFeedTab tab={props.tab} onTabClick={props.onTabClick} />

//               <YourFeedTab
//                 token={props.token}
//                 tab={props.tab}
//                 onTabClick={props.onTabClick} />
              
//               <TagFilterTab tag={props.tag} /> 

//             </ul>
//           </div>
//       */}
//       <ArticleList
//         pager={props.pager}
//         articles={props.articles}
//         loading={props.loading}
//         articlesCount={props.articlesCount}
//         currentPage={props.currentPage} />
//       { params.length == 0 && !props.params.tag && !props.params.askey && props.local && (
//           <React.Fragment>
//             <h2>Featured events</h2>
//             <ArticleList
//               pager={props.pager}
//               articles={props.featuredArticles}
//               loading={props.loading}
//               articlesCount={props.articlesCount}
//               currentPage={props.currentPage} />
//           </React.Fragment>
//         )}
//     </div>
//   );
// };

// export default connect(mapStateToProps, mapDispatchToProps)(MainView);
