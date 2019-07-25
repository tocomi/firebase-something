<template lang="pug">
  v-layout
    v-flex(v-for="result in results" text-xs-center xs12 sm6)
      p {{ result.team }}
      p {{ result.score }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Result extends Vue {

  results: Array<object> = [
    {
      team: "Ys",
      score: 6,
    },
    {
      team: "G",
      score: 4,
    }
  ]

}
</script>