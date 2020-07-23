import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { ADD_COMMENT } from '../../constants/actionTypes';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
  onSubmit: payload =>
    dispatch({ type: ADD_COMMENT, payload })
});

class CommentInput extends React.Component {
  constructor() {
    super();
    this.state = {
      body: '',
      rating: 0
    };

    this.setBody = ev => {
      this.setState({ body: ev.target.value });
    };

    this.createComment = ev => {
      ev.preventDefault();
      if (this.state.body != ''){
        const payload = agent.Comments.create(this.props.slug,
          { 
            body: this.state.body,
            rating: this.state.rating
          });
        this.setState({ 
          body: '',
          rating: 0
        });        
        this.props.onSubmit(payload);
        this.props.onClose();
      }
    };

    this.ratingChanged = (rating) => {
      this.setState({ rating : rating });
    }
  }

  render() {
    return (
      <form className="card comment-form" onSubmit={this.createComment}>
        <div className="card-footer">
          <div className="card-left">
            <Link
              to={`/@${this.props.currentUser.username}`}
              className="comment-author">
              <img src={this.props.currentUser.image} className="comment-author-img" alt='' />
              {this.props.currentUser.username}
            </Link>
            <ReactStars
              value={this.state.rating}
              count={5}
              onChange={this.ratingChanged}
              size={18}
              half={true}
              emptyIcon={<i className='far fa-star'></i>}
              halfIcon={<i className='fa fa-star-half-alt'></i>}
              fullIcon={<i className='fa fa-star'></i>}
              color2={'#ffd700'} />
            {/*
              <img
                src={this.props.currentUser.image}
                className="comment-author-img"
                alt={this.props.currentUser.username} />
            */}
          </div>
          <div className="card-right">
          </div>
        </div>
        <div className="card-block">
          <textarea className="form-control"
            placeholder="Write a review..."
            value={this.state.body}
            onChange={this.setBody}
            rows="9">
          </textarea>
        </div>
        <div className="card-btns">
          <button
            className="btn"
            type="button"
            onClick={ () => this.props.onClose() }
            >
            Close
          </button>
          <button
            className="btn"
            type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default connect(() => ({}), mapDispatchToProps)(CommentInput);
