<template lang="html">
  <h2>Register</h2>
  <div class="row">
    <div class="card mx-auto">
      <div class="card-header test-white bg-primary">
        <h4>Register</h4>
      </div>
      <div class="card-body">
        <form @submit.prevent="registerUser">
          <div class="form-group">
            <label for="username">Username</label>
            <input
              class="form-control"
              type="text"
              placeholder="Username"
              name="username"
              v-model="username"
              id="username"
              >
          </div>
          <div class="form-group">
            <label for="Name">Name</label>
            <input
              class="form-control"
              type="text"
              placeholder="name"
              name="name"
              v-model="name"
              id="name"
              >
          </div>
          <div class="form-group">
            <label for="Email">Email</label>
            <input
              class="form-control"
              type="text"
              placeholder="Email"
              name="email"
              v-model="email"
              id="email"
              >
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              class="form-control"
              type="password"
              placeholder="Password"
              name="password"
              v-model="password"
              id="password"
              >
          </div>
          <div class="form-group">
            <label for="confirm_password">Confirm password</label>
            <input
              class="form-control"
              type="password"
              placeholder="Confirm password"
              name="confirm_password"
              v-model="confirm_password"
              id="confirm_password"
              >
          </div>
          <div class="form-group">
            <label for="type">Type of User</label>
            <input
              class="form-control"
              type="text"
              placeholder="Admin?"
              name="type"
              v-model="type"
              id="type"
              >
          </div>
          <button class="btn btn-primary">Register</button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <router-link to="/login" class="card-link">Already have an account?</router-link>

        </form>

      </div>
    </div>
  </div>
</template>

<script>

import {mapActions} from 'vuex';
export default {
  data(){
    return{
      username:"",
      password:"",
      confirm_password:"",
      name:"",
      email:"",
      type:"",
    }
  },
  methods:{
    ...mapActions(['register']),
    registerUser(){
      // eslint-disable-next-line no-unused-vars

      let user = {
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password,
        email: this.email,
        name:this.name,
        type:this.type
      }
      this.register(user).then(res=>{
        if(res.data.success){
          this.$router.push("login");
        }
      });
    }

  }
}
</script>

<style lang="css" scoped>
.card{
  width: 60%;
  border-radius: 0;
}
.btn{
  width: 60%;
  border-radius: 0;
}
.form-control{
  border-radius: 0;
}
</style>
