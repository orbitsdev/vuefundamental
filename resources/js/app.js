import './bootstrap';



import { createApp } from 'vue/dist/vue.esm-bundler.js';
import App from './components/App.vue';

import Create from './components/Create.vue';
import Edit from './components/Edit.vue';


import * as VueRouter from 'vue-router';


//router


const routes = [
    {path: '/create_user', component:Create , name: 'CreateUser'},
    {path: '/edit_user', component:Edit , name: 'EditUser'},
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory('vuefundamentak/public'),
    routes,
});

// const router = VueRouter.createRouter({
//     history: VueRouter.createWebHistory('/base-history/'),
//     routes: routes,
//   })

const app =  createApp({
    components:{
        App,
    }
});

app.use(router);
router.isReady().then(()=> app.mount('#app'));

// createApp(App).mount("#app");