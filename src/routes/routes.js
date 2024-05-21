import aboutuspage from "../views/pages/aboutuspage";
import detailpage from "../views/pages/detail";
import homepage from "../views/pages/homepage";

const routes = [
    { path: '#/', handler: homepage },
    { path: '#/detail', handler: detailpage},
    { path: '#/about', handler: aboutuspage}
];

export default routes;