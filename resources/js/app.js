require("./bootstrap");

window.Vue = require("vue");
import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
// import cs from "vuetify/lib/locale/cs";
import { store } from "./store/store.js";
// import VueMeta from "vue-meta";

Vue.use(VueRouter);
Vue.use(Vuetify);
// Vue.use(VueMeta);
// Vue.use(require("vue-shortkey"));

Vue.config.silent = false;

let Login = () => import("./components/Pages/Auth/LoginComponent.vue");
let Navigation = () => import("./components/navigation/Navigation.vue");
let MainComponent = () => import("./components/Pages/Main/Main.vue");
let CustomerMainComponent = () =>
    import("./components/Pages/Customers/CustomerMainComponent.vue");
// let PageNotFound = () => import("./components/404/404.vue");
// let NotAuthorized = () => import("./components/Auth/403.vue");

let routes = [
    {
        path: "/",
        component: Navigation,
        children: [
            {
                path: "customers/:component/:customer?",
                component: CustomerMainComponent,
            },
            {
                path: ":component?/:subcomponent?",
                component: MainComponent,
            },
            // {
            //     path: "/user/:component",
            //     component: User,
            // },
        ],
    },
    {
        path: "/login",
        component: Login,
    },
    // {
    //     path: "/403",
    //     component: NotAuthorized,
    // },
    // {
    //     path: "*",
    //     component: PageNotFound,
    // },
];

const router = new VueRouter({
    routes,
    // mode: "history",
});

const opts = {};

const app = new Vue({
    el: "#app",
    store,
    router,
    vuetify: new Vuetify({
        theme: {
            dark: false,
        },
        opts,
        // lang: {
        //     locales: { cs },
        //     current: "cs",
        // },
    }),
});
