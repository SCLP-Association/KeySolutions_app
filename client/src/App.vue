<template>
  <div id="app">

    <Navbar/>
  <div class="container">
    <router-view/>
  </div>

</div>
</template>

<script type="text/javascript">

import Navbar from '@/components/Navbar';
export default{
components:{
  Navbar
}
};

</script>

<style>
.card{
  border-radius: 0px;
}
</style>
