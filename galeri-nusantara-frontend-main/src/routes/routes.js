import aboutuspage from "../views/pages/aboutuspage";
import detailpage from "../views/pages/detail";
import homepage from "../views/pages/homepage";
import favoritepage from "../views/pages/favorite";
import loginpage from "../views/pages/loginpage";
import registerpage from "../views/pages/registerpage";
import dashboardPage from "../views/pages/dashboard";

const routes = [
  { path: "#/", handler: homepage },
  { path: "#/detail", handler: detailpage },
  { path: "#/favorite", handler: favoritepage },
  { path: "#/about", handler: aboutuspage },
  { path: "#/login", handler: loginpage },
  { path: "#/register", handler: registerpage },
  { path: "#/dashboard", handler: dashboardPage },
];

export default routes;
