<script lang="ts">
import {ref,reactive} from 'vue'
import { useElementHover } from '@vueuse/core'
import autoAnimate  from '@formkit/auto-animate'
import MyCompo from './MyCompo.vue';

const _initObj = {
      textAdd: 'this is text1',
      inputSchema: [
        {id: 'dsfasdgag-0', type:'text', label: 'label1', value:""},
        {id: 'dsfasdgag-1', type:'text', label: 'label2', value:""},
        {
          id: 'dsfasdgag-2', 
          type:'multiselect', 
          label: 'label3', 
          value:"",
          selected: [
            { id: 'jklgfkljghj-0', text: 'tag1'},
            { id: 'jklgfkljghj-1', text: 'tag2'},
            { id: 'jklgfkljghj-2', text: 'tag3'}
          ],
          selectable: [
            { id: 'jklgfkljghj-0', text: 'tag1'},
            { id: 'jklgfkljghj-1', text: 'tag2'},
            { id: 'jklgfkljghj-2', text: 'tag3'},
            { id: 'jklgfkljghj-3', text: 'tag3'},
            { id: 'jklgfkljghj-4', text: 'tag4'},
            { id: 'jklgfkljghj-5', text: 'tag5'},
          ]
        },
        {
          id: 'dsfasdsdsfsdgag-2', 
          type:'multiselect', 
          label: 'label3', 
          value:"",
          selected: [
            { id: 'jklgfdffsdkljghj-0', text: 'atag1'},
            { id: 'jklgfdffsdkljghj-1', text: 'atag2'},
            { id: 'jklgfdffsdkljghj-2', text: 'atag3'},
          ],
          selectable: [
            { id: 'jklgfdffsdkljghj-0', text: 'atag1'},
            { id: 'jklgfdffsdkljghj-1', text: 'atag2'},
            { id: 'jklgfdffsdkljghj-2', text: 'atag3'},
            { id: 'jklgfdffsdkljghj-3', text: 'atag4'},
            { id: 'jklgfdffsdkljghj-4', text: 'atag5'},
            { id: 'jklgfdffsdkljghj-5', text: 'atag6'}
          ]
        },
      ]
    }

export default {
  name: 'my-nav-item',
  props: {

  },
  components: { MyCompo },
  directives: {
    autoAnimate:{
      mounted: (el, binding) => {
          autoAnimate(el, binding.value || {});
      },
    }
  },
  setup(props, context) {
    const selRef = ref()
    const isHovered = useElementHover(selRef)
    
    return {
      selRef,
      isHovered,
      initObj:reactive(_initObj)
    }
  }
}

</script>

<template>
  <div className="l-item" ref="selRef" v-auto-animate="{ duration: 500 }">   
    "item"
    <div 
      className="l-item-hover" 
      v-if="isHovered"
      >
      <MyCompo :initObj="initObj"></MyCompo>
    </div>
  </div>
</template>

<style scoped>
.l-item {
  width: 50px;
  height: 50px;
  background-color: grey;
  position: relative;
}
.l-item-hover{
  position: absolute;
  top:0;
  right: calc(100%);
  padding-right: 15px;
}
</style>
