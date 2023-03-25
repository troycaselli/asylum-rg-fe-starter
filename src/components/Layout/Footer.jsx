import { Space, Typography, Layout, Image } from 'antd';
import React from 'react';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import '../../styles/Footer.less';
import '../../styles/RenderLandingPage.less';
const { Text } = Typography;
const { primary_accent_color } = colors;

function FooterContent() {
  return (
    <div>
      {/*logo*/}
      <div>
        <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
      </div>
      <Space className="footer-container" direction="horizontal">
        <Space direction="vertical" align="start">
          {/*contact info*/}
          <Text style={{ color: 'white' }}>
            Human Rights First
            <br />
            75 Broad St, 31st Floor, New York,
            <br />
            New York, New York 10004 US
          </Text>
          {/*media contact*/}
          <Text style={{ color: 'white' }}>
            For Media Inquiries call 202-370-3323
          </Text>
        </Space>
      </Space>
    </div>
  );
}

function SubFooter() {
  const { Footer } = Layout;
  const base_url = 'https://www.humanrightsfirst.org';
  const button_links_by_text = {
    'About Us': `${base_url}/about`,
    'Contact Us': `${base_url}/about/contact`,
    Press: `${base_url}/press`,
    'Terms & Privacy': `${base_url}/about/privacy-policy`,
    'Sign Up': `${base_url}/sign-up`,
    Careers: `${base_url}/careers`,
  };
  return (
    <Footer
      style={{ backgroundColor: primary_accent_color, marginLeft: '-20px' }}
    >
      <div direction="horizontal" className="footer-button-wrapper">
        {Object.entries(button_links_by_text).map((text_link_pair, index) => {
          return (
            <button
              key={index}
              type="text"
              size="small"
              href={text_link_pair[1]}
              className="footer-buttons"
            >
              {text_link_pair[0]}
            </button>
          );
        })}
      </div>
    </Footer>
  );
}

export { FooterContent, SubFooter };
