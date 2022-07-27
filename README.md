# test-nuxt3app

### Cosa ha funzionato fin ora:

`npm install nuxt-directus @nuxtjs/tailwindcss tailwind-config-viewer`

nuxt.config.ts
```
export default defineNuxtConfig({
    modules: ['nuxt-directus', '@nuxtjs/tailwindcss'],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.ts',
        exposeConfig: false,
        injectPosition: 0,
        viewer: true,
    },
    directus: {
        url: "https://directus.digitool.media",
    }
})
```

package.json
```
"dependencies": {
    "@nuxtjs/tailwindcss": "^5.3.1",
    "nuxt-directus": "^2.3.0",
    "tailwind-config-viewer": "^1.7.1"
  }
```

tailwind.config.ts
```
import { Config } from 'tailwindcss'

export default <Config> {
  theme: {
    extend: {}
  },
}
```

# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
