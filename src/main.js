import { createApp } from "vue";
import router from "./router/index.js";
import App from "./App.vue";
import * as bootstrap from "bootstrap";

import "./assets/scss/style.scss";
import "./assets/css/style.css";
import "./assets/css/screen.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faMessage,
  faCode,
  faAngleDown,
  faServer,
  faTerminal,
  faWandMagicSparkles,
  faFileCode,
  faPalette,
  faPaperPlane,
  faCircleXmark
} from "@fortawesome/free-solid-svg-icons";
import { faUbuntu, faDiscord, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

library.add(
  faMessage,
  faCode,
  faAngleDown,
  faServer,
  faTerminal,
  faWandMagicSparkles,
  faFileCode,
  faPalette,
  faUbuntu,
  faDiscord,
  faTwitter,
  faGithub,
  faEnvelope,
  faPaperPlane,
  faCircleXmark
);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
