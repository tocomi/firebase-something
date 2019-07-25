<template lang="pug">
  Result
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Result from '../components/Result.vue'

@Component({
  components: {
    Result,
  }
})
export default class Inspire extends Vue {

}
</script>