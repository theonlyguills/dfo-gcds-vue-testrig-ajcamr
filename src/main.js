import { createApp } from 'vue';
import {  defineCustomElements,
} from '@cdssnc/gcds-components/loader';

import '@cdssnc/gcds-components/dist/gcds/gcds.css';
import './style.css';
import App from './App.vue';

defineCustomElements();

createApp(App).mount('#app');
