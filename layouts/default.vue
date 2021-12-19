<template>
  <div class='layout'>
    <Header/>
    <div style='flex: 1;display: flex;padding: 20px'>
      <div style='flex: 0 0 300px'/>
      <Nuxt style='flex: 1 1 auto' />
    </div>
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
  background-color: #FFFFFF;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

</style>
