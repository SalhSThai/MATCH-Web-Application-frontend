import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReDuxProvider from './redux/ReduxProvider';
import { BrowserRouter } from 'react-router-dom';
import ContainerComponent from './styled-component/ContainerComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReDuxProvider>
    <BrowserRouter>
      <ContainerComponent>
        <App />
      </ContainerComponent>
    </BrowserRouter>
  </ReDuxProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
