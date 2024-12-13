import { ActorProvider, AgentProvider } from '@ic-reactor/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { canisterId, idlFactory } from './declarations/backend';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AgentProvider withProcessEnv>
      <ActorProvider idlFactory={idlFactory} canisterId={canisterId}>
        <App />
      </ActorProvider>
    </AgentProvider>
  </React.StrictMode>,
);
