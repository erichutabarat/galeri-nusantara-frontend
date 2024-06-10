import "regenerator-runtime";
import "../styles/style.css";
import "../styles/responsive.css";
import App from "./app";
import Hamburger from "../scripts/hamburger";
import loadEvent from "./eventLister";
import Header from "../views/components/header";
import Logout from "../utils/logout";
import ModalManager from "./modal-manager";

const Apps = new App();

window.addEventListener("load", () => {
  Apps.navigate();
  Header();
});

window.addEventListener("hashchange", () => {
  Apps.navigate();
});

window.addEventListener("popstate", () => {
  Apps.navigate();
});

loadEvent();
Hamburger();
Logout();
ModalManager();