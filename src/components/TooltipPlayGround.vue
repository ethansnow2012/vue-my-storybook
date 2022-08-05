<script lang="ts">
import { string } from 'prop-types'
import {ref, inject} from 'vue'
import 'floating-vue/dist/style.css'

import {
  VTooltip,
  VClosePopper,
} from 'floating-vue'
export default {
  name: 'tooltip-playground',
  props: {
    text1: string
  },
  directives: {
    tooltip: VTooltip,
    //tooltipCloser: VClosePopper
  },
  emits: ['someevent'],
  setup(props, context) {

    return {

    }
  }
}

</script>

<template>

  <div v-tooltip="'yooooooo.'" >   
    adsfasdf
  </div>
</template>

<style scoped>

</style>
