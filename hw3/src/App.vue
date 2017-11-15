<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <route-link to='/' class="navbar-brand">Vue Course project</route-link>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <router-link tag="li" to="/users" active-class="active">
              <a>Users list</a>
            </router-link>
            <router-link tag="li" to="/add" active-class="active">
              <a>Add user</a>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
