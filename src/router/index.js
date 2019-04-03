import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import One from '@/components/one'
import Two from '@/components/two'
import Three from '@/components/three'
import Four from '@/components/four'
import Five from '@/components/five'

Vue.use(Router)

export default new Router({
    routes: [
        {
           path:'/',
           component:Home
        },
        {
            path:'/one',
            component:One
        },
        {
            path:'/two',
            component:Two
        },
        {
            path:'/three',
            component:Three
        },
        {
            path:'/four',
            component:Four
        },
        {
            path:'/five',
            component:Five
        }
    ]
})
