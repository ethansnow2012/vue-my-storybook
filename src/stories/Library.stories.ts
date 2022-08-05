
import AutoAnimationPlayGround from '../components/AutoAnimationPlayGround.vue';
import TooltipPlayGround from '../components/TooltipPlayGround.vue';
import { Meta, Story } from '@storybook/vue3'

export default {
  title: 'Library Test',
  component: [AutoAnimationPlayGround, TooltipPlayGround],
  argTypes: {
  },
};

const Template: Story  = (args ) => ({
  components: { AutoAnimationPlayGround},
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

const Template2: Story  = (args ) => ({
  components: { TooltipPlayGround },
  setup() {
    console.log('story 1')
    return { args }
  },
  template: `
  <TooltipPlayGround>
  </TooltipPlayGround>
    `,
})



export const Primary = Template.bind({});
Primary.args = {}


export const Tooltip = Template2.bind({});
Tooltip.args = {}


