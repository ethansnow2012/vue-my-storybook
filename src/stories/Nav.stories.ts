import NavLayout from '../components/NavLayout.vue';
import NavItem from '../components/NavItem.vue';
import MyNav from '../components/Nav.vue';
import { Meta, Story } from '@storybook/vue3'
import fetchCall from '../dataService/FetchCall'
import { reactive, watchEffect, ref, Ref, watch, toRaw } from 'vue';
import {NavLayoutRootData} from '../dataTypes/MyTypes'


export default {
  title: 'Example/layout',
  component: [MyNav, NavLayout, NavItem],
  argTypes: {
  },
};

const Template: Story  = (args ) => ({
  components: { MyNav, NavLayout, NavItem },
  setup() {
    const rootData = reactive<{data:NavLayoutRootData|null, loopingState:'waiting'|'fine'}>({data:null, loopingState: 'fine'})
    fetchCall.navLayout().then((data)=>{
      rootData.data = data
    })
    watch(rootData, ()=>{

      let isIdentical = true
      if(!rootData.data) return
      
      const _rootData = JSON.parse(JSON.stringify(toRaw(rootData.data)));

      const newNavLayoutRootData = _rootData;
      const selectable = newNavLayoutRootData?.navRightTopButtons?.inputInitObject.map((x,ii)=>{
        return {id:x.textAdd+ii, text: x.textAdd}
      })
      newNavLayoutRootData?.navRightTopButtons?.inputInitObject.forEach((el)=>{
        el.inputSchema.forEach((el2)=>{
          if(el2.type=='multiselect'){
            if(JSON.stringify(el2.selectable)!=JSON.stringify(selectable)){
              isIdentical = false
            }
            el2.selectable = selectable
          }
        })
      })
      
      if(!isIdentical){
        console.log('not Identical')
        rootData.data = newNavLayoutRootData
      }else{
        console.log('identical')
      }
      
    })
    return { args, rootData }
  },
  template: `
  <NavLayout >
    <MyNav v-bind="args" :rootData="rootData"/>
  </NavLayout>
    `,
})


export const Primary = Template.bind({});
Primary.args = {}


