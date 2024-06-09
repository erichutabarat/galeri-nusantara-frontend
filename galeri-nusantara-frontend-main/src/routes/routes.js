const routes = [
  {
    path: "#/",
    handler: () => import("../views/pages/homepage"),
    afterRender: () => import("../views/after-render/home-after")
  },
  {
    path: "#/detail",
    handler: () => import("../views/pages/detail")
  },
  {
    path: "#/favorite",
    handler: () => import("../views/pages/favorite")
  },
  {
    path: "#/about",
    handler: () => import("../views/pages/aboutuspage")
  },
  {
    path: "#/login",
    handler: () => import("../views/pages/loginpage")
  },
  {
    path: "#/register",
    handler: () => import("../views/pages/registerpage")
  },
  {
    path: "#/dashboard",
    handler: () => import("../views/pages/dashboard"),
    afterRender: () => import("../views/after-render/dashboard-after")
  },
  {
    path: "#/update-postingan",
    handler: () => import("../views/pages/updatepostpage")
  },
];

export default routes;
