import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    Plugins: [react()],
    base : process.env.VITE_BASE_PATH || "/Flavora"
})