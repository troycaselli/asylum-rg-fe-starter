import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import AuthenticationNav from '../common/authenticationNav';
import '../../styles/Header.less';

const { primary_accent_color } = colors;

function HeaderContent() {
  return (
    <div
      className="header-container"
      style={{ backgroundColor: primary_accent_color }}
    >
      <div id="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div className="links">
        <Link to="/" className="nav-links">
          Home
        </Link>
        <Link to="/graphs" className="nav-links">
          Graphs
        </Link>
        <AuthenticationNav />
      </div>
    </div>
  );
}

export { HeaderContent };
