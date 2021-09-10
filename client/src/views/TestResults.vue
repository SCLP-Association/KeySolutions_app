<template lang="html">



    <div class="vqtests">
      <h3>VQ Tests results</h3>
      <ul class="list-group" >
        <div class=""  v-for="vqtest in vqtests" :key="vqtest.name">
          <li id="itemsLi" class="list-group-item">
            <h5>{{vqtest.name}} radio <span>{{ new Date(vqtest.date).toLocaleString() }}</span></h5>
            <p><b>1.</b>{{vqtest.ans1}} <b>2.</b>{{vqtest.ans2}}<b>3.</b>{{vqtest.ans3}} <b>4.</b>{{vqtest.ans4}} <b>5.</b>{{vqtest.ans5}}
            <b>6.</b>{{vqtest.ans6}} <b>7.</b>{{vqtest.ans7}} <b>8.</b>{{vqtest.ans8}} <b>9.</b>{{vqtest.ans9}} <b>10.</b>{{vqtest.ans10}}
            <b>11.</b>{{vqtest.ans11}} <b>12.</b>{{vqtest.ans12}} <b>13.</b>{{vqtest.ans13}} <b>14.</b>{{vqtest.ans14}} <b>15.</b>{{vqtest.ans15}}
            <b>16.</b>{{vqtest.ans16}} <b>17.</b>{{vqtest.ans17}} <b>18.</b>{{vqtest.ans18}} <b>19.</b>{{vqtest.ans19}} <b>20.</b>{{vqtest.ans20}}
            <b>21.</b>{{vqtest.ans21}} <b>22.</b>{{vqtest.ans22}} <b>23.</b>{{vqtest.ans23}} <b>24.</b>{{vqtest.ans24}} <b>25.</b>{{vqtest.ans25}}</p>
          </li>
        </div>
      </ul>
    </div>


</template>

<script>
// @ is an alias to /src
// eslint-disable-next-line no-unused-vars
import {mapActions,mapGetters} from 'vuex';

export default {
  computed: mapGetters(["vqtests"]),
  methods: {
    ...mapActions(["getVQTests"])
  },
  async created() {
    await  this.getVQTests();
  }
}
</script>

<style >
#itemsLi{
  background-color: cyan;
}


</style>
