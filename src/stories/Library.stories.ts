
import AutoAnimationPlayGround from '../components/AutoAnimationPlayGround.vue';
import { Meta, Story } from '@storybook/vue3'

export default {
  title: 'Library Test',
  component: [AutoAnimationPlayGround],
  argTypes: {
  },
};

const Template: Story  = (args ) => ({
  components: { AutoAnimationPlayGround },
  setup() {
    console.log('story 1')
    return { args }
  },
  template: `
  <NavLayout>
    <AutoAnimationPlayGround/>
  </NavLayout>
    `,
})


export const Primary = Template.bind({});
Primary.args = {}


