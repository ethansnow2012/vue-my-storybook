<script lang="ts">
import {ref, reactive} from 'vue'
import autoAnimate  from '@formkit/auto-animate'

const data1 = [{id:'sdfasdfag-0'}, {id:'sdfasdfag-1'}, {id:'sdfasdfag-2'}]
export default {
  name: 'AutoAnimationPlayGround',
  props: {

  },
  directives: {
    autoAnimate:{
        mounted: (el, binding) => {
            autoAnimate(el, binding.value || {});
        },
    }
  },
  setup(props, context) {
    const blockDataRepresent = reactive({data: data1})
    return {
      blockDataRepresent,
      reandomToggle:()=>{
        const newData = [...data1]
        const random = Math.floor(Math.random() * newData.length);
        if(Math.random()>0.5){
            newData.splice(random, 1)[0];
        }
        blockDataRepresent.data = newData
      }
    }
  }
}

</script>

<template>
  <div>
    <div>Test Case 1:</div>
    <div className="l-block-wrapper" v-auto-animate="{ duration: 100 }">
        <div v-for="block in blockDataRepresent.data" className="l-block" >
            {{block.id}}
        </div>
    </div>
    
    <div className="l-block-control">
        <button className="l-button" @click="reandomToggle">Random Toggle</button>
    </div>
  </div>
</template>

<style scoped>
    .l-block{
        width: 10em;
        height: 10em;
        background: grey;
        margin: 5px;
    }
</style>
