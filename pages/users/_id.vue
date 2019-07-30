<template lang="pug">
  v-layout
    v-flex(text-xs-center)
      img.mb-5(src="/v.png" alt="Vuetify.js")
      blockquote.blockquote
        h3 {{ userId }}
        img(:src="user.profile_image_url" width="120" alt="")
        p {{ user.description || 'No description' }}
        p
          nuxt-link(to="/")
            small
              b Top page
        h3 {{ user.id }}さんの投稿一覧
        ul
          li(v-for="item in items" :key="item.id")
            h4
              span {{ item.title }}
            div {{ item.body.slice(0, 130) }}...
            p
              a(target="_black" :href="item.url") {{ item.url }}
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  async asyncData({ route, app }) {
    const userId: string = route.params.id
    const user: object = await app.$axios.$get(`https://qiita.com/api/v2/users/${userId}`)
    const items: object = await app.$axios.$get(`https://qiita.com/api/v2/items?query=user:${userId}`)
    return {
      user, items,
    }
  }
})
export default class Id extends Vue {
  userId: string = this.$nuxt.$route.params.id
}
</script>