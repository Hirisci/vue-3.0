import { createApp } from 'vue';
import App from './App.vue';

import VueResizeObserver from 'vue-resize-observer';

const app = createApp(App);
app.use(VueResizeObserver);
app.mount('#app');
