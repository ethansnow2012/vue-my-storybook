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
            { id: 'jklgfkljghj-3', text: 'tag3'},
            { id: 'jklgfkljghj-4', text: 'tag4'},
            { id: 'jklgfkljghj-5', text: 'tag5'}
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
            { id: 'jklgfdffsdkljghj-2', text: 'atag3'}
          ],
          selectable: [
            { id: 'jklgfdffsdkljghj-3', text: 'atag3'},
            { id: 'jklgfdffsdkljghj-4', text: 'atag4'},
            { id: 'jklgfdffsdkljghj-5', text: 'atag5'}
          ]
        },
      ]
    }
};


