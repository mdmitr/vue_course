import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main.vue'
import UsersTable from '@/components/UsersTable.vue'
import AddUser from '@/components/AddUser.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/users',
      name: 'UsersTable',
      component: UsersTable
    },
    {
      path: '/add',
      name: 'AddUser',
      component: AddUser
    }
  ]
})
