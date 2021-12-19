<template>
  <div>
    <h1 class='h1 title' style='text-align: center;margin-top: 100px' :style="{opacity: opacity}">Custom Library</h1>
    <div class='container'>
      <div class='showcase'>
        <p id='buttons'>Buttons</p>
        <Button v-text='"Primary"' primary @click='dividerColor = dividerColors.primary'/>
        <Button v-text='"Secondary"' secondary @click='dividerColor = dividerColors.secondary'/>
        <p id='dividers'>Dividers</p>
        <Divider :color="dividerColor"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component } from 'vue-property-decorator';
import Button from '~/components/Button.vue'
import Divider from '~/components/Divider.vue'
@Component({
  components: { Divider, Button }
})
export default class Index extends Vue {
  opacity = '0';
  dividerColors = DividerColors;
  dividerColor = '#FFFFFF';
  mounted(){
    this.opacity = '1';
  }

}
enum DividerColors {
  primary = '#66FCF1',
  secondary = '#C5C6C7',
}
</script>
<style scoped lang='scss'>
.title {
  transition: .3s;
}
.showcase {
}
</style>
