<template>
  <nav class='header'>
    <nuxt-link :to='link.url' v-for='link in navigation' :key='link.id' v-text='link.text' class='navigation-link'/>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class Header extends Vue {
  navigation = [{text: 'Products',id: 'buttons',url:'products'}];
  scrollIntoView(id){
    document.querySelector('#' + id)?.scrollIntoView({
      behavior: "smooth",
      block: 'start'
    })
  }
}
</script>

<style lang="scss" scoped>
 .header {
   max-width: 1440px;
   padding: 0 20px;
   margin: 0 auto;
   display: flex;
   min-height: 75px;
 }
</style>
