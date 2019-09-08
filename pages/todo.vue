<template lang="pug">
v-layout
  v-flex(xs12)
    div#input
      v-text-field(v-model="name" placeholder="name")
      v-text-field(v-model="email" placeholder="email")
      v-btn(@click="submit") submit
  v-flex(xs12)
    div#list
      ul
        li(v-for="(user, userIdx) in users" :key="userIdx")
          ul
            li name: {{ user.name }}
            li email: {{ user.email }}
            v-btn(flat small) delete
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
  name: string = ''
  email: string = ''

  created(): void {
    this.$store.dispatch('setUsersRef', db.collection('users'))
  }

  submit(): void {
    if (this.name === '' || this.email === '') return
    const user: Object = {
      name: this.name,
      email: this.email,
    }
    const userRef = db.collection('users')
    userRef.add(user)
    this.name = ''
    this.email = ''
  }

}
</script>
