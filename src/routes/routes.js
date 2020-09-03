import Home from "../components/home/AppHome.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: '*', redirect: () => '/',
    },
];


export default routes;
