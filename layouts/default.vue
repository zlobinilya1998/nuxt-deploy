<template>
  <div style='display: flex;min-height: 200vh' class='layout'>
    <Header/>
    <Nuxt style='flex: 1'/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Header from '~/components/Header.vue'

@Component({
  components: { Header }
})
export default class DefaultLayout extends Vue {
}
</script>

<style lang='scss' scoped>
.layout {
  background-color: $bg-primary;
}

</style>
