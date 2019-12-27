import React from 'react';
import { Email, GitHub, LinkedIn } from '@material-ui/icons'; // https://material-ui.com/components/material-icons/

const socialMediaItemStyle = {
  width: '20px',
  margin: '8px',
  verticalAlign: 'middle',
  color: '#FFF'
};

class SocialMediaPanel extends React.Component {

  render() {
    return (
      <div>
        <a
          href="https://www.linkedin.com/in/andrei-buntsev-486659117/"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          style={socialMediaItemStyle}
        >
          <LinkedIn />
        </a>

        <a
          href="https://github.com/AndrewBuntsev"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          style={socialMediaItemStyle}
        >
          <GitHub />
        </a>

        <a
          href="http://andreibuntsev.blogspot.com/"
          title="Blogger"
          target="_blank"
          rel="noopener noreferrer"
          style={socialMediaItemStyle}
        >
          <img src={require('../assets/images/blogger.png')} alt="Blogger" width="20" />
        </a>

        <a
          href="mailto:andrew.buntsev@gmail.com"
          title="E-Mail"
          target="_blank"
          rel="noopener noreferrer"
          style={socialMediaItemStyle}
        >
          <Email />
        </a>

        <a
          href="https://jsfiddle.net/user/AndrewBuntsev/fiddles/"
          title="JSFiddle"
          target="_blank"
          rel="noopener noreferrer"
          style={socialMediaItemStyle}
        >
          <img src={require('../assets/images/jsfiddle.png')} alt="JSFiddle" width="20" />
        </a>

        <a
          href="skype:andy.cracer?chat"
          title="Skype"
          target="_blank"
          rel="noopener noreferrer"
          style={socialMediaItemStyle}
        >
          <img src={require('../assets/images/skype.png')} alt="Skype" width="20" />
        </a>
      </div>
    );
  }
}

export default SocialMediaPanel;
