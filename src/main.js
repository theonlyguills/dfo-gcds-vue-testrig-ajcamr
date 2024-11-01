import { createApp } from 'vue';
import {
  applyPolyfills,
  defineCustomElements,
} from '@cdssnc/gcds-components/loader';

import '@cdssnc/gcds-components/dist/gcds/gcds.css';
import './style.css';
import App from './App.vue';

applyPolyfills().then(() => {
  defineCustomElements();
});

createApp(App).mount('#app');
