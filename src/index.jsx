import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'antd/dist/antd.less';
import { NotFoundPage } from './components/pages/NotFound';
import { LandingPage } from './components/pages/Landing';
import { Profile } from './components/pages/Profile';
import { ExternalAPI } from './components/pages/ExternalAPI';
import { FooterContent, SubFooter } from './components/Layout/Footer';
import { HeaderContent } from './components/Layout/Header';
import Loading from './components/common/Loading';
import Auth0ProviderWithHistory from './auth/auth0ProviderWithHistory';
import { useAuth0 } from '@auth0/auth0-react';
import ProtectedRoute from '../src/auth/protectedRoute';
import GraphsContainer from './components/pages/DataVisualizations/GraphsContainer';

import { Layout } from 'antd';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './state/reducers';
import { colors } from './styles/data_vis_colors';

const { primary_accent_color } = colors;

const store = configureStore({ reducer: reducer });
ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root')
);

export function App() {
  const { Footer } = Layout;
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <div
        style={{
          padding: '0',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: primary_accent_color,
        }}
      >
        <HeaderContent />
      </div>
      <div style={{ flexGrow: '1' }}>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/graphs" component={GraphsContainer} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/external-api" component={ExternalAPI} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <Footer
        style={{
          backgroundColor: primary_accent_color,
          color: '#E2F0F7',
        }}
      >
        <FooterContent />
      </Footer>
      <Footer
        style={{
          backgroundColor: primary_accent_color,
          padding: 0,
        }}
      >
        <SubFooter />
      </Footer>
    </Layout>
  );
}
