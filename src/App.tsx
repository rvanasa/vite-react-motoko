import { useEffect, useState } from 'react';
import './App.css';
import motokoLogo from './assets/motoko_moving.png';
import motokoShadowLogo from './assets/motoko_shadow.png';
import reactLogo from './assets/react.svg';
import ethLogo from './assets/eth.svg';
import { backend } from './declarations/backend';
import { Block } from './declarations/backend/backend.did';

function App() {
  const [loading, setLoading] = useState(false);
  const [block, setBlock] = useState<Block | undefined>();
  const [error, setError] = useState<string | undefined>();

  const fetchBlock = async () => {
    try {
      setLoading(true);
      setError(undefined);
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
        <a href="https://github.com/internet-computer-protocol/evm-rpc-canister#readme" target="_blank">
          <img src={ethLogo} className="logo ethereum" alt="Ethereum logo" />
        </a>
      </div>
      <h1>React + Motoko + EVM RPC</h1>
      <div className="card">
        <button onClick={fetchBlock} style={{ opacity: loading ? 0.5 : 1 }}>
          Get latest Ethereum block
        </button>
        {!!block && (
          <pre
            style={{
              textAlign: 'left',
              color: 'darkgreen',
              maxWidth: 800,
              opacity: loading ? 0.5 : 1,
            }}
          >
            {JSON.stringify(
              block,
              (_, v) => (typeof v === 'bigint' ? v.toString() : v),
              2,
            )}
          </pre>
        )}
        {!!error && (
          <pre style={{ textAlign: 'left', color: 'darkred' }}>{error}</pre>
        )}
      </div>
      <p className="read-the-docs">
        Click on the React, Motoko, and Ethereum logos to learn more
      </p>
    </div>
  );
}

export default App;
