import React from 'react';
import './assets/BadgePreview.css';
import SocialNetwork from '../SocialNetwork/SocialNetwork'

function BadgePreview() {
  return <div className="app__preview-badge">
      <div className="badge badge--preview rounded-circle text-center">
          <h1 className="badge__title">Hello!</h1>
          <h1 className="badge__title">I'm Roman</h1>
          <div className="badge__profession">
              <p>Frontend Developer</p>
          </div>
          <div className="badge__socials">
              <div className="badge__social-list">
                  <SocialNetwork/>
              </div>
          </div>
      </div>
  </div>;
}

export default BadgePreview;
