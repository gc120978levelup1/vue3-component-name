# Vue3 Component Template for Laravel + Vue + ShadCn projects

Template for bundling Vue3 compoenent to npm package manager

## Changes in src/components/index.ts

* Vue3ComponentName

```sh
import Vue3ComponentName from './Vue3ComponentName.vue'
export default Vue3ComponentName;
```

## Changes in src/components/main.ts

* Vue3ComponentName

```sh
import type { App } from 'vue';
import Vue3ComponentName from "@/components";
export default {
  install: (app: App) => {
    app.component('Vue3ComponentName', Vue3ComponentName);
  }
};
export {Vue3ComponentName} ;
```

## Change the name of src/components/Vue3ComponentName.vue

* as name of your component
* modify the files content as per your requirement

## Changes in package.json

* Vue3ComponentName
* vue3-component-name

```sh
{
  "name": "vue3-component-name",
  "private": false,
  "version": "0.0.1",
  "type": "module",
  "files": [
    "dist"
  ],
  "main": "./dist/vue3-component-name.umd.js",
  "module": "./dist/vue3-component-name.js",
  "exports": {
    ".": {
      "import": "./dist/vue3-component-name.es.js",
      "require": "./vue3-component-name.umd.js"
    }
  },
  "types": "./dist/main.d.ts",
  "keywords": [
    "vue3-component-name",
    "Vue3ComponentName"
  ],

```

## Changes in vite.config.ts

* Vue3ComponentName
* vue3-component-name

example:
```sh
  build: {
    cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: "src/components/index.ts",
      name: "Vue3ComponentName",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `vue3-component-name.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      input: {
        main: path.resolve(__dirname, "src/components/main.ts"),
      },
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
```

## Installing to npm package

ex. building
```sh
npm run build
```

ex. for testing
```sh
npm link
```

ex. in testing component user side
```sh
npm link vue3-component-name
```

ex. login to publish
```sh
npm login
```

ex. publish component
```sh
npm publish
```

