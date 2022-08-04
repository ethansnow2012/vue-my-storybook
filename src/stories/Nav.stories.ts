import NavLayout from '../components/NavLayout.vue';
import NavItem from '../components/NavItem.vue';
import MyNav from '../components/Nav.vue';
import { Meta, Story } from '@storybook/vue3'
import fetchCall from '../dataService/FetchCall'
import { reactive, watchEffect, ref } from 'vue';
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
    const rootData = reactive<{data:NavLayoutRootData|null}>({data:null})
    fetchCall.navLayout().then((data)=>{
      rootData.data = data
    })
    return { args, rootData }
  },
  template: `
  <NavLayout >
    <my-nav v-bind="args" :rootData="rootData"/>
  </NavLayout>
    `,
})


export const Primary = Template.bind({});
Primary.args = {}


