<template lang="html">
  <h2>Profile</h2>
  <div class="card">
    <ul class="list-group">
      <li class="list-group-item">Email: {{ user.email}}</li>
      <li class="list-group-item">Username: {{user.username}}</li>
      <li class="list-group-item">Name: {{user.name}}</li>
    </ul>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
export default {
  computed: mapGetters(['user']),
  methods:{
    ...mapActions(['getProfile'])
  },
  created(){
    this.getProfile();
  }
};
</script>

<style lang="css" scoped>
.list-group-item{
  background-color: cyan;
}
</style>
