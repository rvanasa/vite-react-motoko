import { useEffect, useState } from 'react';
import './App.css';
import motokoLogo from './assets/motoko_moving.png';
import motokoShadowLogo from './assets/motoko_shadow.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import { backend } from './declarations/backend';
import { Block } from './declarations/backend/backend.did';

function App() {
  const [loading, setLoading] = useState(false);
  const [block, setBlock] = useState<Block | undefined>();
  const [error, setError] = useState<string | undefined>();

  const fetchBlock = async () => {
    try {
      setError(undefined);
      setLoading(true);
      const block = await backend.getLatestEthereumBlock();
      setBlock(block);
    } catch (err) {
      console.error(err);
      setError(String(err));
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchBlock();
  // }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a
          href="https://internetcomputer.org/docs/current/developer-docs/build/cdks/motoko-dfinity/motoko/"
          target="_blank"
        >
          <span className="logo-stack">
            <img
              src={motokoShadowLogo}
              className="logo motoko-shadow"
              alt="Motoko logo"
            />
            <img src={motokoLogo} className="logo motoko" alt="Motoko logo" />
          </span>
        </a>
      </div>
      <h1>Vite + React + Motoko</h1>
      <div className="card">
        <button onClick={fetchBlock} style={{ opacity: loading ? 0.5 : 1 }}>
          Get latest Ethereum block
        </button>
        {!!block && (
          <pre style={{ textAlign: 'left' }}>
            {JSON.stringify(
              block,
              (_, v) => (typeof v === 'bigint' ? v.toString() : v),
              2,
            )}
          </pre>
        )}
        {!!error && <pre style={{ color: 'red' }}>{error}</pre>}
        <p>
          Edit <code>backend/Backend.mo</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React, and Motoko logos to learn more
      </p>
    </div>
  );
}

export default App;
