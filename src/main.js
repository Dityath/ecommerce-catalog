import Vue from "vue";
import App from "./App.vue"; // Main app file

import "./assets/main.css"; // main CSS file

new Vue({
  render: (h) => h(App),
}).$mount("#app");
