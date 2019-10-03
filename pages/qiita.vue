<template lang="pug">
  v-layout
    v-flex(text-xs-center)
      img.mb-5(src="/v.png" alt="Vuetify.js")
      PostedItem(v-for="item in items" :key="item.id" :item="item")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import PostedItem from '../components/PostedItem.vue'

@Component({
  async asyncData({ app }) {
    const items = await app.$axios.$get('https://qiita.com/api/v2/items?query=tag:nuxt.js')
    return {
      items
    }
  },
  components: {
    PostedItem,
  }
})
export default class Qiita extends Vue {

}
</script>