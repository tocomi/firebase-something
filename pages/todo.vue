<template lang="pug">
div#todo
  p {{ count }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { db } from '../plugins/firebase'
import { mapGetters } from 'vuex'

@Component({
  computed: mapGetters({ users: 'getUsers' })
})
export default class Inspire extends Vue {

  count: number = 1

  smash(): void {
    this.count *= 2
  }

  created(): void {
    this.$store.dispatch('setUsersRef', db.collection('users'))
  }

}
</script>
