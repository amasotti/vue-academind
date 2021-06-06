import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';
import BaseCard from './components/BaseCard';

// create App
const app = createApp(App);

// Register global components
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);



app.mount('#app');
