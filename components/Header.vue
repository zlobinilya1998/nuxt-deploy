<template>
    <div class='header'>
      <nav class='header-inner'>
        <nuxt-link :to='link.url' v-for='link in navigation' :key='link.id' v-text='link.text' class='navigation-link'/>
      </nav>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class Header extends Vue {
  navigation = [{text: 'Магазин',url:'/shop'},{text: 'Библиотека',url:'/library'},{text: 'Сообщество',url:'/community'},];
}
</script>

<style lang="scss" scoped>
 .header {
   border-bottom: 1px solid gray;
   .header-inner {
     max-width: 1440px;
     margin: 0 auto;
     padding: 0 20px;
     display: flex;
     align-items: center;
     min-height: 65px;
   }
   .navigation-link {
     font-size: 2.3rem;
     text-decoration: unset;
     color: #C5C6C7;
     transition: .3s;
     font-family: Roboto sans-serif;
     &:not(:last-child) {
       margin-right: 20px;
     }
     &:hover {
       color: #FFFFFF;
     }
   }
   .nuxt-link-exact-active {
     color: #FFFFFF;
   }
 }
</style>
