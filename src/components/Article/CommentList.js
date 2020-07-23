import Comment from './Comment';
import React from 'react';

const CommentList = props => {
  if (props.comments.length == 0)
    return (
      <div className="card-block-blank">
        No reviews.
      </div>
    );
  return (
    <div>
      {
        props.comments.map(comment => {
          return (
            <Comment
              comment={comment}
              currentUser={props.currentUser}
              slug={props.slug}
              key={comment.id} />
          );
        })
      }
    </div>
  );
};

export default CommentList;
