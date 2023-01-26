import { createApp } from "vue";
import { createPinia } from "pinia";

import router from "./router";

import "./assets/main.css";
import socketioService from "./services/socketio.service";
import AppVue from "./App.vue";

AppVue.created = () => {
  socketioService.setupSocketConnection();
};
const app = createApp(AppVue);

app.use(createPinia());
app.use(router);

app.mount("#app");
