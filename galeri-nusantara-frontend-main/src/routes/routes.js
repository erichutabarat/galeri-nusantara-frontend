import aboutuspage from "../views/pages/aboutuspage";
import detailpage from "../views/pages/detail";
import homepage from "../views/pages/homepage";
import favoritepage from "../views/pages/favorite";
import loginpage from "../views/pages/loginpage";
import registerpage from "../views/pages/registerpage";
import dashboardPage from "../views/pages/dashboard";
import updatepostpage from "../views/pages/updatepostpage";
import homeAfter from "../views/after-render/home-after";

const routes = [
  { path: "#/", handler: homepage, afterRender: homeAfter},
  { path: "#/detail", handler: detailpage },
  { path: "#/favorite", handler: favoritepage },
  { path: "#/about", handler: aboutuspage },
  { path: "#/login", handler: loginpage },
  { path: "#/register", handler: registerpage },
  { path: "#/dashboard", handler: dashboardPage },
  { path: "#/update-postingan", handler: updatepostpage },
];

export default routes;
