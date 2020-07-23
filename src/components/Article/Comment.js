import DeleteButton from './DeleteButton';
import { Link } from 'react-router-dom';
import React from 'react';
import ReactStars from 'react-rating-stars-component';

const Comment = props => {
  const comment = props.comment;
  const show = props.currentUser &&
    props.currentUser.username === comment.author.username;
  return (
    <div className="card">
      <div className="card-footer">
        <div className="card-left">
          <Link
            to={`/@${comment.author.username}`}
            className="comment-author">
            <img src={comment.author.image} className="comment-author-img" alt='' />
            {comment.author.username}
          </Link>
          <ReactStars
            value={comment.rating}
            count={5}
            onChange={this.ratingChanged}
            size={18}
            edit={false}
            half={true}
            emptyIcon={<i className='far fa-star'></i>}
            halfIcon={<i className='fa fa-star-half-alt'></i>}
            fullIcon={<i className='fa fa-star'></i>}
            color2={'#ffd700'} />
        </div>
        <div className="card-right">
          <span className="date-posted">
            {new Date(comment.createdAt).toDateString()}
          </span>
          <DeleteButton show={show} slug={props.slug} commentId={comment.id} />
        </div>
      </div>
      <div className="card-block">
        <p className="card-text">{comment.body}</p>
      </div>
    </div>
  );
};

export default Comment;
