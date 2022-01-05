<template>
  <div class='layout'>
    <Header/>
    <div style='flex: 1;display: flex;padding: 40px 20px'>
        <div class='container' style='flex: 1 1 auto'>
          <transition mode='out-in' name='fade'>
            <Nuxt style='flex: 1 1 auto' :nuxt-child-key='$route.fullPath'/>
          </transition>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Header from '~/components/Header.vue'
import Sidebar from '~/components/Sidebar.vue'
import Footer from '~/components/Footer.vue'

@Component({
  components: { Footer, Sidebar, Header },
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
