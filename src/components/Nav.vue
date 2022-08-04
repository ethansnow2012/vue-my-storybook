<template>
  <div className="nav-wrapper">
    <NavItem v-for="inputInitObject in rootData.data?.navRightTopButtons.inputInitObject" :inputInitObject="inputInitObject"></NavItem>
  </div>
  
</template>

<script lang="ts">

import { reactive, computed, watchEffect } from 'vue';
import NavItem from './NavItem.vue';
//import NavItem from '../c'

export default {
  name: 'my-nav',
  components:{NavItem},
  props:{
    rootData: null
  },
  setup(props, { emit }) {
    watchEffect(()=>{ console.log('yo 2222', props.rootData?.data)})
    return {
      
    }
  },
};
</script>
<style scoped>
.nav-wrapper{
    width: max-content;
    margin-left: auto;
    display: flex;
}
.nav-wrapper {
    flex-direction: column;
    gap: 10px;
}
</style>
