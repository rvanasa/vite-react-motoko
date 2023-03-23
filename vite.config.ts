import react from '@vitejs/plugin-react';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import { defineConfig } from 'vite';

const canisterIdPath = join(__dirname, '.dfx/local/canister_ids.json');
if (!existsSync(canisterIdPath)) {
    throw new Error(
        'Unable to find canisters. Running `dfx deploy` should fix this problem.',
    );
}
const canisterIds = JSON.parse(readFileSync(canisterIdPath, 'utf8'));

const defaultNetwork = 'local';
const network = process.env['DFX_NETWORK'] || defaultNetwork;

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        global: 'window',
        'process.env.DFX_NETWORK': JSON.stringify(process.env.DFX_NETWORK),
        // Expose canister IDs provided by `dfx deploy`
        ...Object.fromEntries(
            Object.entries(canisterIds).map(([name, ids]) => [
                `process.env.${name.toUpperCase()}_CANISTER_ID`,
                JSON.stringify(ids[network] || ids[defaultNetwork]),
            ]),
        ),
    },
    server: {
        // Local IC replica proxy
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:4943',
            },
        },
    },
});
