import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Layout from './components/Layout/Layout';
import './styles/styles.css'

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Layout>
    <App />
  </Layout>
);
