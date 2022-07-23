<template>
  <div 
    :class="classes" 
    :style="styles"
    ref="selfRef"
    @click="(ev)=>{
        click$At(ev)
    }"
    >
    <div className="c-root-add">
        {{initObj.textAdd}}
    </div>
    <div className="c-root-expendable" >
        <div 
            className="c-root-expendable-i" 
            v-for="inputItem in initObj.inputSchema" 
                @click="(ev)=>{
                    ev.stopPropagation()
                }"
            >
            <label :htmlFor="inputItem.id">{{inputItem.label}}({{inputItem.value}})</label>
            <input type="text" :id="inputItem.id" @change="onChange">
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { reactive, computed, ref, watch, isReactive  } from 'vue'; 
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
    let {initObj} = props
    if(!isReactive(initObj)){
        initObj = reactive(initObj)
    }
    const expandToggle = ref(false)
    const selfRef = ref<HTMLElement|null>(null)
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
    const onChange = (ev)=>{
        const currentValue = ev.target.value
        const dueId = ev.target.id
        let dueSchema =  initObj.inputSchema.filter(x=>x.id==dueId)[0]
        const restSchema = initObj.inputSchema.filter(x=>x.id!=dueId)
        dueSchema.value = currentValue
        
        initObj = { //effect
            ...initObj, 
            inputSchema: [
                ...restSchema,
                dueSchema
            ]
        }
    }

    return {
        classes: computed(() => ({
            'c-root': true,
            'c-root-expanding': expandToggle.value,
        })),
        styles,
        initObj,
        selfRef,
        expandToggle,
        onChange,
        click$At: (ev)=>{
            expandToggle.value = !expandToggle.value
        }
    }
  },
};
</script>
<style scoped>
.c-root{
    ---color1: #8AD2F0;
    ---color2: #C6E9F8;
    ---color-grey: #696969;
    ---sp-1: 20px;
    ---sp-2: 15px;
    ---sp-3: 0.3em;
    display: flex;
    background-color: var(---color1);
    color: white;
    width: max-content;
    /* padding: 10px 13px; */
    border-radius: 10px;
    cursor: pointer;
    transition: all .8s ease;
    transition-property: max-width, min-width;
    overflow: hidden;
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
    background: var(---color2);;
    color: var(---color-grey);
}
.c-root-expanding .c-root-expendable{
    width: unset;
    height: unset;
    padding-right: 10px;
    padding-left: 10px;
    padding-top: var(---sp-1);
    padding-bottom: var(---sp-1);
}
.c-root-add{
    width: max-content;
    flex-shrink: 0;
    padding: var(---sp-1);
}
.c-root-expendable-i{
    display: flex;
    flex-direction: column;
}
.c-root-expendable-i + .c-root-expendable-i{
    margin-top: var(---sp-2);
}
.c-root-expendable-i > * + *{
    margin-top:  var(---sp-3);
}
.c-root-expendable-i input{
    outline: none;
}
</style>
