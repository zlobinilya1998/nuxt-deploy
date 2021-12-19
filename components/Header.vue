<template>
  <nav class='header'>
    <ul class='navigation'>
      <li v-for='link in navigation' :key='link.id' v-text='link.text' @click='scrollIntoView(link.id)' class='navigation-link'/>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class Header extends Vue {
  navigation = [{text: 'Buttons',id: 'buttons'},{text: 'Dividers',id: 'dividers'}];
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
   border-right: $color-primary 1px solid;
   min-width: 250px;
 }
.navigation {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  list-style: none;
  margin: 0;
  &-link {
    cursor: pointer;
    transition: .3s;
    &:hover {
      color: #FFFFFF;
    }
  }
}
</style>
