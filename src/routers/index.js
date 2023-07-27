import { createWebHistory, createRouter } from "vue-router";
import HomePage from '@/pages/HomePage.vue'
// import FormPage from '@/pages/FormPage.vue'
import TestPage from '@/pages/TestPage.vue'
import InputPassword from '@/pages/InputPassword.vue'
import SlotPage from '@/pages/SlotPage.vue'
import FristPage from '@/pages/food/FristPage.vue'
import WelcomePage from '@/pages/food/WelcomePage.vue'
import LoginPage from '@/pages/food/LoginPage.vue'
import HomeScreen from  '@/pages/food/HomeScreen.vue'
import FoodDetails from '@/pages/food/FoodDetails.vue'
import CategoryPage from '@/pages/food/CategoryPage.vue'
import CartPage  from '@/pages/food/CartPage.vue'
import OrderComing from '@/pages/food/OrderComing.vue'
import FavoritePage from '@/pages/food/FavoritePage.vue'
import ProfilePage  from '@/pages/food/ProfilePage.vue'
import SignUp from '@/pages/food/SignUp.vue'
import VefificationPage from '@/pages/food/VefificationPage.vue'
import AddressPage from '@/pages/food/AddressPage.vue'
import RatingPage  from '@/pages/food/RatingPage.vue'
import ReviewPage from '@/pages/food/ReviewPage.vue'
import ReviewResturent from '@/pages/food/ReviewResturent.vue'
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
        path: "/resturent",
        name: "ReviewResturent",
        component: ReviewResturent,
    },
    {
        path: "/review",
        name: "ReviewPage",
        component: ReviewPage,
    },
    {
        path: "/address",
        name: "AddressPage",
        component: AddressPage,
    },
    {
        path: "/ordercoming",
        name: "OrderComing",
        component: OrderComing,
    },
    {
        path: "/rating",
        name: "RatingPage",
        component: RatingPage,
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
        path: "/profile",
        name: "ProfilePage",
        component: ProfilePage,
    },
    {
        path: "/detail/:id",
        name: "FoodDetails",
        component: FoodDetails,
    },
 
    {
        path: "/welcome",
        name: "WelcomePage",
        component: WelcomePage,
    },
    {
        path: "/signup",
        name: "SignUp",
        component: SignUp,
    },
    {
        path: "/register",
        name: "LoginPage",
        component: LoginPage,
    },
    {
        path: "/vefification",
        name: "VefificationPage",
        component: VefificationPage,
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