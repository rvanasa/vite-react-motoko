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
            // Object.keys(process.env)
            //     .filter((key) => key.startsWith('CANISTER_ID_'))
            //     .map((key) => [
            //         `process.env.${key
            //             .substring('CANISTER_ID_'.length)
            //             .toUpperCase()}_CANISTER_ID`,
            //         JSON.stringify(process.env[key]),
            //     ]),
            Object.entries(canisterIds).map(([name, ids]) => [
                `process.env.${name.toUpperCase()}_CANISTER_ID`,
                JSON.stringify(ids[network] || ids[defaultNetwork]),
            ]),
        ),
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:4943',
                // changeOrigin: true,
            },
        },
    },
});
