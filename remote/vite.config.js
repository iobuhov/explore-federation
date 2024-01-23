import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 9232
    },
    preview: {
        port: 5002
    },
    plugins: [
        vue(),
        federation({
            name: "remote",
            filename: "remoteEntry.js",
            // Modules to expose
            exposes: {
                "./ButtonApp": "./src/ButtonApp.js"
            }
        })
    ]
});
