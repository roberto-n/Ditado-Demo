import Vue from "vue";
import VueRouter from "vue-router";
import ditado from '../view/ditado';



Vue.use(VueRouter);



const routes = [{
    name:'ditado',
    path:'/ditado',
    component:ditado,},
]


 
const router = new VueRouter({
    mode:'history',
    routes,
   
});

export default router
