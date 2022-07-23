import MyCompo from './MyCompo.vue';
import { initObjType } from './MyCompo';
import { Meta, Story } from '@storybook/vue3'

export default {
  title: 'Example/MyCompo',
  component: MyCompo,
  argTypes: {
  },
};

interface Args {
  initObj:initObjType
}

const Template: Story<Args>  = (args ) => ({
  components: { MyCompo },
  setup() {
    return { args }
  },
  template: '<my-compo v-bind="args" />',
})


export const Primary = Template.bind({});

Primary.args = {
    initObj: {
      textAdd: 'this is text1',
      inputSchema: [
        {id: 'dsfasdgag-0', type:'text', label: 'label1', value:""},
        {id: 'dsfasdgag-1', type:'text', label: 'label2', value:""},
      ]
    }
};


