<template lang="pug">
  v-card.posted-item
    h4
      span {{ item.title }} 
      small
        span by 
        nuxt-link(:to="`/users/${item.user.id}`") {{ item.user.id }}
      div {{ item.body.slice(0, 130) }}......
      p
        a(:href="item.url" target="_blank") {{ item.url }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class PostedItem extends Vue {

  @Prop() item: any

}
</script>

<style lang="scss" scoped>
.posted-item {
  padding: 10px 0;
}
</style>
