<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
      <router-link class="navbar-brand" to="/">KeySolutions</router-link>
      <router-link class="navbar-brand" to="/login" v-if="!isLoggedIn">Login</router-link>
      <router-link class="navbar-brand" to="/register" v-if="!isLoggedIn">Register</router-link>
      <router-link class="navbar-brand" to="/profile" v-if="isLoggedIn">Profile</router-link>
      <router-link class="navbar-brand" to="/vqtest" v-if="isLoggedIn && !isAdmin">VQTest</router-link>
      <router-link class="navbar-brand" to="/results" v-if="isAdmin">Test results</router-link>
      <router-link class="navbar-brand" to="/admin" v-if="isAdmin">Test Administration</router-link>
      <a to="/logout" class="nav-link" @click.prevent="logoutUser" >
        Logout
      </a>



    <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
            <router-link to="/" class="nav-link">
              Home
            </router-link>
        </li>
        <li class="nav-item active">
            <router-link to="/about" class="nav-link">
              About
            </router-link>
        </li>
        <li class="nav-item active" v-if="!isLoggedIn">
            <router-link to="/login" class="nav-link">
              Login
            </router-link>
        </li>
        <li class="nav-item active" v-if="!isLoggedIn">
            <router-link to="/register" class="nav-link">
              Register
            </router-link>
        </li>
        <li class="nav-item active" v-if="isLoggedIn">
            <router-link to="/profile" class="nav-link">
              Profile
            </router-link>
        </li>
        <li class="nav-item active" v-if="isLoggedIn">
            <a to="/logout" class="nav-link" @click.prevent="logoutUser">
              Logout
            </a>
        </li>
        <li class="nav-item active" v-if="isLoggedIn">
          <router-link to="/vqtest" class="nav-link">
            VQ Test
          </router-link>
        </li>

      </ul>
    </div> -->
  </div>
</nav>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {mapGetters,mapActions} from 'vuex';
export default {
  computed:{
    ...mapGetters(["isLoggedIn","isAdmin"])
  },
  methods:{
    ...mapActions(['logout']),
    logoutUser(){
      this.logout();
    }
  }
}
</script>

<style lang="css" scoped>
</style>
