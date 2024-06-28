import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorker from'./serviceWorker';
import eruda from 'eruda';
if (process.env.NODE_ENV !== 'production') {
  eruda.init();
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);



root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

serviceWorker.register();