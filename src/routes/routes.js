import Home from "../components/home/AppHome.vue";
import EditPage from '../components/booking/form/formPage.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/booking/create",
        name: "BookingCreate",
        component: EditPage,
    },
    {
        path: '*', redirect: () => '/',
    },
];


export default routes;
