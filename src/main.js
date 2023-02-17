import { app } from "./app";
import phoneMask from "./shared/directives/phoneMask";

app.directive("phone", phoneMask).mount("#app");
