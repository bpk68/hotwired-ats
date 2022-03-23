import { application } from "./application";

import AlertController from "./alert_controller.js";
application.register("alert", AlertController);

import HelloController from "./hello_controller.js";
application.register("hello", HelloController);
