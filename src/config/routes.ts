import IRoute from "../interface/route";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";
import HomePage from "../pages/home";
import PortfolioPage from "../pages/portfolio";

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
        exact: true,
    },
    {
        path: '/about',
        name: 'About Page',
        component: AboutPage,
        exact: true,
    },
    {
        path: '/portfolio',
        name: 'Portfolio Page',
        component: PortfolioPage,
        exact: true,
    },
    {
        path: '/contact',
        name: 'Contact Page',
        component: ContactPage,
        exact: true,
    },
];

export default routes;