import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { AppProvider } from '@/providers/app-provider';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>,
);
