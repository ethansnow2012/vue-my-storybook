import NavLayout from '../components/NavLayout.vue';
import NavItem from '../components/NavItem.vue';
import MyNav from './Nav.vue';
import { Meta, Story } from '@storybook/vue3'

export default {
  title: 'Example/aaa',
  component: [MyNav, NavLayout, NavItem],
  argTypes: {
  },
};

const Template: Story  = (args ) => ({
  components: { MyNav, NavLayout, NavItem },
  setup() {
    return { args }
  },
  template: `
  <NavLayout>
    
      
      <my-nav v-bind="args"/>

    
  </NavLayout>
    `,
})


export const Primary = Template.bind({});
Primary.args = {}


