import './App.scss';
import motokoLogo from './assets/motoko_moving.png';
import motokoShadowLogo from './assets/motoko_shadow.png';
import reactLogo from './assets/react.svg';
import ethLogo from './assets/eth.svg';

// JSON viewer component
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import { useUpdateCall } from '@ic-reactor/react';

function App() {
  const { data, error, loading, call } = useUpdateCall({
    functionName: 'getLatestEthereumBlock',
  });

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a
          href="https://github.com/internet-computer-protocol/evm-rpc-canister#readme"
          target="_blank"
        >
          <img src={ethLogo} className="logo ethereum" alt="Ethereum logo" />
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
      <h1 style={{ paddingLeft: 36 }}>React + EVM RPC + Motoko</h1>
      <div className="card" style={{ opacity: loading ? 0.5 : 1 }}>
        <button onClick={call} disabled={loading}>
          Get latest block
        </button>
        {!!data && (
          <pre className="json-view">
            <JsonView
              data={data}
              shouldExpandNode={allExpanded}
              style={{ ...defaultStyles, container: '' }}
            />
          </pre>
        )}
        {!!error && (
          <pre style={{ textAlign: 'left', color: 'grey' }}>
            {error.message}
          </pre>
        )}
        {!!loading && !data && !error && <div className="loader" />}
      </div>
      <p className="read-the-docs">
        Click on the React, Motoko, and Ethereum logos to learn more
      </p>
    </div>
  );
}

export default App;
