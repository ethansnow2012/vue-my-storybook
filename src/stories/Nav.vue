<template>
  <div className="nav-wrapper">
    <NavItem></NavItem>
    <NavItem></NavItem>
    <NavItem></NavItem>
    
  </div>
  
</template>

<script lang="ts">

import { reactive, computed } from 'vue';
import NavItem from '../components/NavItem.vue';
//import NavItem from '../c'

export default {
  name: 'my-nav',
  components:{NavItem},
  props: {
  },

  setup(props, { emit }) {
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
