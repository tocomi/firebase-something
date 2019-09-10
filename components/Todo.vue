<template lang="pug">
div.todo
  ul {{ todo.title }} {{ todo.done }} {{ todo.duedate }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Inspire extends Vue {

  @Prop() todo: any;

}
</script>

<style lang="sass">

</style>