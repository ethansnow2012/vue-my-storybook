<script lang="ts">
import {ref} from 'vue'


export default {
  name: 'my-nav-layout',
  setup(props, context) {
    const aa = ref('6666')
    console.log('my-nav-layout', context)
    return {
      aa
    }
  }
}

</script>

<template>
  <div className="l-layout">   
    <slot/>
  </div>
</template>

<style scoped>
.l-layout {
  width: 100%;
  height: 700px;
}
.l-layout > *{
  margin-left: auto;
}
</style>
