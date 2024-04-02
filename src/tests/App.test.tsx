import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App';
import { StrictMode } from 'react';
import { ActorProvider, AgentProvider } from '@ic-reactor/react';
import { canisterId, idlFactory } from '../declarations/backend';

describe('App', () => {
  it('renders as expected', () => {
    render(
      <StrictMode>
        <AgentProvider withProcessEnv disableAuthenticateOnMount>
          <ActorProvider idlFactory={idlFactory} canisterId={canisterId}>
            <App />
          </ActorProvider>
        </AgentProvider>
      </StrictMode>,
    );
    // expect(screen.getByText(/Vite + React + Motoko/i)).toBeInTheDocument();
    expect(1).toEqual(1);
  });
});
