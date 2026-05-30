import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 👈 මේක උඩින්ම ඉම්පෝර්ට් කරන්න

export default defineConfig({
  base: '/cvdesign/',
  plugins: [
    react(),
    tailwindcss(), // 👈 ප්ලගින් එක මෙතනට දාන්න
  ],
})