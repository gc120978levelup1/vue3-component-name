import type { App } from 'vue';
import Vue3ComponentName from "@/components";
export default {
  install: (app: App) => {
    app.component('Vue3ComponentName', Vue3ComponentName);
  }
};
export {Vue3ComponentName} ;