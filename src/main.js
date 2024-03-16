import { createApp, h } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import vSelect from 'vue-select';

// vSelect.props.components.default = () => ({
//   OpenIndicator: {
//     render: () => h('span', ''),
//   },
// });

createApp(App).component('vSelect', vSelect).use(createPinia()).mount('#app');
