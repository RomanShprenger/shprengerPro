import React from 'react';
import { Button } from 'reactstrap';
import './assets/SocialNetwork.css';

function SocialNetwork(data) {
  return <ul className={"social-list " + (data.inverse ? data.inverse : "")}>
      <li className="social-list__item">
          <Button color="link" href="https://github.com//RomanShprenger" target="_blank" rel="noopener" className="github-link social-list__link rounded-circle">
              <i className="mdi mdi-github-circle"></i>
          </Button>
      </li>
      <li className="social-list__item">
          <Button color="link" href="https://www.linkedin.com/in/roman-shprenger-132673118" target="_blank" rel="noopener" className="linkedin-link social-list__link rounded-circle">
              <i className="mdi mdi-linkedin"></i>
          </Button>
      </li>
      <li className="social-list__item">
          <Button color="link" href="https://www.facebook.com/shprengerroman" target="_blank" rel="noopener" className="facebook-link social-list__link rounded-circle">
              <i className="mdi mdi-facebook"></i>
          </Button>
      </li>
      <li className="social-list__item">
          <Button color="link" href="https://vk.com/shprengerroman" target="_blank" rel="noopener" className="vk-link social-list__link rounded-circle">
              <i className="mdi mdi-vk"></i>
          </Button>
      </li>
  </ul>;
}

export default SocialNetwork;
