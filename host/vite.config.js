import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3492
    },
    preview: {
        port: 5001
    },
    plugins: [
        react(),
        federation({
            name: "host",
            remotes: {
                remote: "http://localhost:5002/assets/remoteEntry.js"
            }
        })
    ]
});
