import { createWebHistory, createRouter } from "vue-router";
import HomePage from '@/pages/HomePage.vue'
// import FormPage from '@/pages/FormPage.vue'
import TestPage from '@/pages/TestPage.vue'
import InputPassword from '@/pages/InputPassword.vue'
import SlotPage from '@/pages/SlotPage.vue'
import FristPage from '@/pages/food/FristPage.vue'
import SignUpPage from '@/pages/food/SignUpPage.vue'
import LoginPage from '@/pages/food/LoginPage.vue'
import SideMenu from  '@/pages/food/SideMenu.vue'
import HomeScreen from  '@/pages/food/HomeScreen.vue'
import FoodDetails from '@/pages/food/FoodDetails.vue'
import CategoryPage from '@/pages/food/CategoryPage.vue'
import CartPage  from '@/pages/food/CartPage.vue'
import OrderComing from '@/pages/food/OrderComing.vue'
import FavoritePage from '@/pages/food/FavoritePage.vue'
const routes = [
    {
        path: "/home",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/",
        name: "FristPage",
        component: FristPage,
    },
    {
        path: "/homescreen",
        name: "HomeScreen",
        component: HomeScreen,
    },
    {
        path: "/ordercoming",
        name: "OrderComing",
        component: OrderComing,
    },
    {
        path: "/favorite",
        name: "FavoritePage",
        component: FavoritePage,
    },
    {
        path: "/cart",
        name: "CartPage",
        component: CartPage,
    },
    {
        path: "/category/:id",
        name: "CategoryPage",
        component: CategoryPage,
    },
    {
        path: "/detail/:id",
        name: "FoodDetails",
        component: FoodDetails,
    },
    {
        path: "/sidemenu",
        name: "SideMenu",
        component: SideMenu,
    },
    {
        path: "/signup",
        name: "SignUpPage",
        component: SignUpPage,
    },
    {
        path: "/register",
        name: "LoginPage",
        component: LoginPage,
    },
    {
        path: "/slot",
        name: "SlotPage",
        component: SlotPage,
    },
    // {
    //     path: "/form",
    //     name: "FormPage",
    //     component: FormPage,
    // },
    {
        path: "/test",
        name: "TestPage",
        component: TestPage,
    },
    {
        path: "/input",
        name: "InputPassword",
        component: InputPassword,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;