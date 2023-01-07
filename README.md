# Vite + React + Motoko

## Overview

This full-stack Web3 template makes it easy to get started with dapp development on the [Internet Computer](https://internetcomputer.org/) (IC).

### Technology Stack:

- [Vite](https://vitejs.dev/): a high-performance webapp development toolchain
- [React](https://reactjs.org/): a JavaScript UI component library
- [TypeScript](https://www.typescriptlang.org/): JavaScript extended with syntax for types
- [Motoko](https://github.com/dfinity/motoko#readme): a high-level canister (smart contract) programming language for the IC
- [mo-dev](https://github.com/dfinity/motoko-dev-server): a live reload development server for Motoko
- [MOPS](https://j4mwm-bqaaa-aaaam-qajbq-cai.ic0.app/): an on-chain community package manager for Motoko

### Documentation:

- [Vite developer docs](https://vitejs.dev/guide/)
- [React quick start guide](https://beta.reactjs.org/learn)
- [Internet Computer docs](https://internetcomputer.org/docs/current/developer-docs/ic-overview)
- [Motoko developer docs](https://internetcomputer.org/docs/current/developer-docs/build/cdks/motoko-dfinity/motoko/)
- [MOPS usage instructions](https://j4mwm-bqaaa-aaaam-qajbq-cai.ic0.app/#/docs/install)

## Setup

Ensure that [Node.js](https://nodejs.org/en/) and [dfx](https://internetcomputer.org/docs/current/developer-docs/build/install-upgrade-remove) are installed on your system.

Run the following commands in a new, empty project directory:

```sh
npx degit rvanasa/vite-react-motoko # Download this starter project
dfx start --clean --background # Run dfx in the background
npm run setup # Install packages, deploy canisters, and generate type bindings

npm start # Start the development server
```

When ready, run `dfx deploy` to fully build and deploy your application.

## Multiple Terminals

If you want to separate the Vite and Motoko console outputs, consider running each of the following commands in a separate terminal:

```sh
npm run frontend # Vite dev server
npm run backend # Motoko dev server
```
