<template>
  <v-layout>
    <v-flex text-xs-center>
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
      <v-btn @click="smash">SMAAAAAAASH!!</v-btn>
      <p>{{ count }}</p>
      <li v-for="item in items" :key="item.id">
        <h4>
          <span>{{ item.title }}</span>
          <small>
            <span>by </span>
            <nuxt-link :to="`/users/${item.user.id}`">
              {{ item.user.id }}
            </nuxt-link>
          </small>
        </h4>
        <div>{{ item.body.slice(0, 130) }}......</div>
        <p><a :href="item.url" target="_blank">{{ item.url }}</a></p>
      </li>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  async asyncData({ app }) {
    const items = await app.$axios.$get('https://qiita.com/api/v2/items?query=tag:nuxt.js')
    return {
      items
    }
  }
})
export default class Qiita extends Vue {

  count: number = 1

  smash(): void {
    this.count *= 2
  }

}
</script>