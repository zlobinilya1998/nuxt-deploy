<template>
  <div class='footer'>
    <div class='footer-inner'>
      <div v-for='column in navigation'>
        <p v-text='column.text'/>
        <ul>
          <li v-for='link in column.links' v-text='link.text'/>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class Footer extends Vue {
  navigation: FooterColumn[] = [
    {text: 'О нас',links: [{text: 'О нас',url:'/about-us'}]}]

}

type FooterLink = {
  text: string;
  url: string;
}
type FooterColumn = {
  text: string;
  links: FooterLink[];
}

</script>

<style lang="scss">
.footer {
  min-height: 75px;
  border-top: 1px solid gray;
  .footer-inner {
    max-width: 1440px;
    margin: 0 auto;
    display: grid;
  }
}
</style>
