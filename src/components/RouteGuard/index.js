import React from 'react';
import { Route,Redirect,useLocation } from 'react-router-dom';
const RouteGuard = ({ component: Comp,path, isAuthenticated, ...routeProps }) => {
  if(isAuthenticated){
    return (<Route exact path={path} render={props => <Comp  {...props} {...routeProps} />}/>);
  }else{
    return (<Redirect to='/' />);
  }
};

export default RouteGuard;