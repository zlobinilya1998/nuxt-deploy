<template>
  <div :style="{maxWidth: collapsed ? '100px' : '300px'}" style='transition: .6s' class='sidebar'>
    <h3>Explore</h3>
    <ul>
      <div v-for='link in links' class='nav-link'>
        <img style='max-width: 100%' :src='link.icon' alt='nav-icon'>
        <NuxtLink  :to='link.url' v-text='link.text'/>
      </div>
      <div @click='collapsed = !collapsed'>Collapse</div>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class Sidebar extends Vue {
  collapsed: boolean = true;
  links: NavLink[] = [
    {icon: require('@/assets/navigation/new.png'),text:"New In",url:""}
  ];
}
type NavLink = {
  icon: string,
  text: string,
  url: string,
}
</script>

<style lang="scss">
.nav-link {
  display: flex;
  align-items: center;
}
.sidebar {
  background: deepskyblue;
}
</style>
