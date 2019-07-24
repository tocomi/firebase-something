<template lang="pug">
  v-layout
    v-flex(text-xs-center)
      | hoge
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Inspire extends Vue {

  count: number = 1

  smash(): void {
    this.count *= 2
  }

}
</script>