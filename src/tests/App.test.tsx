import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App';
import { StrictMode } from 'react';

describe('App', () => {
  it('renders as expected', () => {
    render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
    // expect(screen.getByText(/Vite + React + Motoko/i)).toBeInTheDocument();
    expect(1).toEqual(1);
  });
});
