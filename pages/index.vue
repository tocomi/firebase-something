<template lang="pug">
v-layout(wrap)
  v-flex(xs12 sm4)
    div#input
      v-text-field(v-model="name" placeholder="name")
      v-text-field(v-model="email" placeholder="email")
      v-btn(@click="submit") submit
  v-flex(xs12 sm8)
    div#list
      ul
        li(v-for="(todo, index) in todos" :key="index")
          Todo(:todo="todo")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { db } from '../plugins/firebase'
import { mapGetters } from 'vuex'

import Todo from '../components/Todo.vue'

@Component({
  computed: mapGetters({ 
    users: 'getUsers',
    todos: 'getTodos',
  }),
  components: {
    Todo,
  }
})
export default class Inspire extends Vue {

  count: number = 1
  name: string = ''
  email: string = ''

  created(): void {
    this.$store.dispatch('setUsersRef', db.collection('users'))
    this.$store.dispatch('setTodosRef', db.collection('todos'))
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

  deleteData(user: any): void {
    const userRef = db.collection('users')
    userRef.doc(user.id).delete()
  }

}
</script>
