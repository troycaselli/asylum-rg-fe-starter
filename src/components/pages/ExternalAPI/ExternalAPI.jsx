import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../../../styles/ExternalAPI.less';

// Hidden Component; Path '/external-api'; paired with auth0-express-js-sample directory
const ExternalApi = () => {
  const [message, setMessage] = useState('');
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const { getAccessTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      const response = await fetch(`${serverUrl}/api/messages/public-message`);

      const responseData = await response.json();

      setMessage(responseData.message);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(
        `${serverUrl}/api/messages/protected-message`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = await response.json();

      setMessage(responseData.message);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div
      className="API-page-container"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <h1>External API</h1>
      <p>
        Use these buttons to call an external API. The protected API call has an
        access token in its authorization header. The API server will validate
        the access token using the Auth0 Audience value.
      </p>
      <div
        className="btn-group"
        role="group"
        aria-label="External API Requests Examples"
      >
        <button type="button" className="API-button" onClick={callApi}>
          Get Public Message
        </button>
        <button type="button" className="API-button" onClick={callSecureApi}>
          Get Protected Message
        </button>
      </div>
      {message && (
        <div className="API-result">
          <h3 className="muted">Result</h3>
          <code className="col-12 text-light bg-dark p-4">{message}</code>
        </div>
      )}
    </div>
  );
};

export default ExternalApi;
