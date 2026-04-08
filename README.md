# AetherCore

A pristine WebGL and Three.js-based interactive 3D web experience.

## Quickstart

```bash
npm install
npm run dev
```

## Deployment via Vercel

AetherCore has been structured to deploy onto Vercel elegantly without complex pipeline configuration! 

1. Push your code to your GitHub Repository.
2. Sign into Vercel and create a **New Project**.
3. Import your `aethercore` repository.
4. **Framework Preset**: Vercel automatically detects Vite. Ensure the build command is `npm run build` and output directory is `dist`.
5. Click **Deploy**. Vercel will automatically build the static assets, including the high-resolution WebGL `.glTF` and `.ktx2` packages securely from your `public/assets` folder.
