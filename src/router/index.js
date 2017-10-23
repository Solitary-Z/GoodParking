import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import home from '@/pages/login'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: home
        }, {
            path: '/login',
            name: 'login',
            component: login
        }
        /*,
        {
          path: '/goodsDetails/:dishTypeId/:dishId',
          name: 'goodsDetails',
          component: goodsDetails
        }*/
    ]
})
