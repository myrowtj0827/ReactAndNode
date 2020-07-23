import CommentInput from './CommentInput';
import CommentList from './CommentList';
import { Link } from 'react-router-dom';
import React from 'react';

const CommentContainer = props => {
  if (props.currentUser) {
    return (
      <div className="comment-list">
        {/*<div>
                  <list-errors errors={props.errors}></list-errors>
                  <CommentInput slug={props.slug} currentUser={props.currentUser} />
                </div>*/}

        <CommentList
          comments={props.comments}
          slug={props.slug}
          currentUser={props.currentUser} />
      </div>
    );
  } else {
    return (
      <div className="comment-list">
        {/*<p>
            <Link to="/login">Sign in</Link>
            &nbsp;or&nbsp;
            <Link to="/register">sign up</Link>
            &nbsp;to leave review on this company.
          </p>*/}

        <CommentList
          comments={props.comments}
          slug={props.slug}
          currentUser={props.currentUser} />
      </div>
    );
  }
};

export default CommentContainer;
