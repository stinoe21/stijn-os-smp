import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path voor GitHub Pages (project-repo). Resulteert in:
//   https://<username>.github.io/stijn-os-smp/
// Deploy je naar Vercel of een root-domein? Zet base dan op '/'.
export default defineConfig({
  base: '/stijn-os-smp/',
  plugins: [react()],
})
