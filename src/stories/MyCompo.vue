<template>
  <div 
    :class="classes" 
    :style="styles"
    ref="selfRef"
    @click="()=>{
        click$At()
    }"
    >
    <div className="c-root-add">
        {{initObj.textAdd}}
    </div>
    <div className="c-root-expendable">
        <div v-for="inputItem in initObj.inputSchema" >
            {{inputItem.label}}
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { reactive, computed, ref, watch  } from 'vue'; 
import { initObjType } from './MyCompo';

export default {
  name: 'my-compo',
  props: {
    initObj:{
      type: Object as PropType<initObjType>,//Object,//
      required: true,
    },
  },

  setup(props, { emit }) {
    const {initObj} = props
    const expandToggle = ref(false)
    const expandReCalc = ref(0)
    const selfRef = ref<HTMLElement|null>(null)
    console.log('setup')
    const styles = computed((self) => 
            {
                return {

                } 
            }
        )
    watch(expandToggle, ()=>{
        
        const currentWidth = selfRef.value?getComputedStyle(selfRef.value).width:''
        if(selfRef.value != null){
            if(expandToggle.value){
                selfRef.value.style.minWidth = ''
                selfRef.value.style.maxWidth = currentWidth
                setTimeout(()=>{
                    if(selfRef.value != null)
                    selfRef.value.style.maxWidth =  '500px'
                }, 0)
            }else{
                selfRef.value.style.maxWidth = ''
                selfRef.value.style.minWidth = currentWidth

                setTimeout(()=>{
                    if(selfRef.value != null)
                    selfRef.value.style.minWidth = '0px'
                }, 0)
            }
            
        }
    })

    return {
        classes: computed(() => ({
            'c-root': true,
            'c-root-expanding': expandToggle.value,
        })),
        styles,
        initObj,
        selfRef,
        expandToggle,
        click$At: ()=>{
            expandToggle.value = !expandToggle.value
        }
    }
  },
};
</script>
<style scoped>
.c-root{
    ---color1: #8AD2F0;
    display: flex;
    background-color: var(---color1);
    color: white;
    width: max-content;
    padding: 10px 13px;
    border-radius: 10px;
    cursor: pointer;
    transition: all .8s ease;
    transition-property: max-width, min-width;
}
.c-root.c-root-expanding{
    cursor: unset;
    max-width: 0;
}
.c-root > * + *{
    padding-left: 10px;
}
.c-root-expendable{
    width: 0;
    height: 0;
    overflow: hidden;
    padding:0;
}
.c-root-expanding .c-root-expendable{
    width: unset;
    height: unset;
    padding: 0 10px;
}
.c-root-add{
    width: max-content;
    flex-shrink: 0;
}
</style>
