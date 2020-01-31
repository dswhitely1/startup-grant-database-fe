import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {Auth0Provider} from "./components/auth0/Auth0Wrapper";
import * as Sentry from '@sentry/browser';

const onRedirectCallback = appState => {
    window.history.replaceState({}, document.title, appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
}

import App from './components/App';

Sentry.init({
    dsn: "https://3fff2a57bcec4d419f25f24c703f14b9@sentry.io/1811765"
});

const AppWithProvider = (
    <Auth0Provider
        domain={process.env.REACT_APP_CLIENT_DOMAIN}
        client_id={process.env.REACT_APP_CLIENT_ID}
        redirect_uri={`${window.location.origin}`}
        audience={process.env.REACT_APP_CLIENT_AUDIENCE}
        onRedirectCallback={onRedirectCallback}
    >
        <Router>
            <App />
        </Router>
    </Auth0Provider>
)

ReactDOM.render(<AppWithProvider />, document.getElementById('root'));
