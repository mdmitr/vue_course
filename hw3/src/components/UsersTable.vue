<template>
    <table class="table">
    <thead>
    <tr>
        <th scope='col'>#</th>
        <th scope="col">User name</th>
        <th scope="col">Phone</th>
        <th scope="col">Address</th>
        <th scope="col" data-formatter="imageFormatter">Avatar</th>
        <th>Edit</th>
    </tr>
    </thead>
    <tr v-for='(user, index) in users'>
        <td> {{index+1}} </td>
        <td> {{user.name}}</td>
        <td> {{user.phone}}</td>
        <td> {{fullAddress(user)}}</td>
        <td> <img :src="user.picture" width="50px" height="50px"></td>
        <td> <button data-toggle="modal" data-target='#editUser'>Modify</button></td>
    </tr>
    </table>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UsersTable',
  data: () => ({
    url: 'http://localhost:3000/users/',
    users: []
  }),
  methods: {
    loadData () {
      axios.get(this.url).then(response => (this.users = response.data))
    },
    fullAddress (user) {
      return user.address
    },
    name (user) {
      return user.firstName + ' ' + user.lastName
    }
  },
  mounted () {
    this.loadData()
  }
}
</script>

<style>

</style>