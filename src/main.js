import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/router.js';

import InputComponent from "@/components/ui/InputComponent.vue";
import ButtonComponent from "@/components/ui/ButtonComponent.vue";
import PreloaderComponent from "@/components/ui/PreloaderComponent.vue";

const app = createApp(App);

app.use(router);


app.component("preloader-component", PreloaderComponent);
app.component("input-component", InputComponent);
app.component("button-component", ButtonComponent);



app.mount('#app');
