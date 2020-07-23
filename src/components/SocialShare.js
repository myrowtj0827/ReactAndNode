import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TumblrShareButton,
  EmailShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  TumblrIcon,
  EmailIcon
} from 'react-share';

const SocialShare = props => {
  const shareLink = props.shareLink || '';
  const title = props.title || '';
  
  return (
    <div className="share-socials">
      <div className="social-item">
        <TwitterShareButton
          url={ shareLink }
          title={ title }
          windowWidth={660}
          windowHeight={460}>
          <TwitterIcon
            size={32}
            round />
        </TwitterShareButton>                
      </div>
      <div className="social-item">
        <FacebookShareButton
          url={ shareLink }
          quote='Facebook'
          windowWidth={660}
          windowHeight={460}>
          <FacebookIcon
            size={32}
            round />
        </FacebookShareButton>
      </div>
      <div className="social-item">
        <LinkedinShareButton
          url={ shareLink }
          windowWidth={660}
          windowHeight={460}>
          <LinkedinIcon
            size={32}
            round />
        </LinkedinShareButton>                
      </div>
      <div className="social-item">
        <TumblrShareButton
          url={ shareLink }
          title={title}
          windowWidth={660}
          windowHeight={460}>
          <TumblrIcon
            size={32}
            round />
        </TumblrShareButton>
      </div>
      <div className="social-item"> 
        <EmailShareButton
          url={ shareLink }
          title={title}
          windowWidth={660}
          windowHeight={460}>
          <EmailIcon
            size={32}
            round />
        </EmailShareButton>
      </div>
    </div>
  );
};

export default SocialShare;
