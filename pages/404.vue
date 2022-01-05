<template>
  <div style='margin: auto'>
      <h1>Этой страницы не существует</h1>
      <nuxt-link to='/' v-text='"Вернуться на главную"'/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class ErrorPage extends Vue {
}
</script>

<style lang="scss">

</style>
