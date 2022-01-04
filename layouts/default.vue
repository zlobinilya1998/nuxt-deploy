<template>
  <div class='layout'>
    <Header/>
    <div style='flex: 1;display: flex;padding: 40px 20px'>
      <div class='container' style='flex: 1 1 auto'>
        <Nuxt style='flex: 1 1 auto' />
      </div>
    </div>
<!--    <Footer/>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Header from '~/components/Header.vue'
import Sidebar from '~/components/Sidebar.vue'
import Footer from '~/components/Footer.vue'

@Component({
  components: { Footer, Sidebar, Header }
})
export default class DefaultLayout extends Vue {
}
</script>

<style lang='scss' scoped>
.layout {
  background-color: #0c0b0b;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

</style>
