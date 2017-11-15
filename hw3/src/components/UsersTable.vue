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
        <td> {{user.customer.name}}</td>
        <td> {{user.customer.phone}}</td>
        <td> {{fullAddress(user)}}</td>
        <td> <img :src="user.customer.avatar" width="50px" height="50px"></td>
        <td> <button data-toggle="modal" data-target='#editUser'>Modify</button></td>
    </tr>
    </table>
</template>

<script>
export default {
  name: 'UsersTable'
}
</script>

<style>

</style>
