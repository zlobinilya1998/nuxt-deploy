<template>
  <div  class='divider' :style="{opacity: opacity,width: width,background: color ? color : ''}"/>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Divider  extends Vue {
  @Prop({ type: String, default: () => '' }) color: string;
  opacity = '0';
  width = '0';
  mounted(){
    this.opacity = '1';
    this.width = '100%';
  }
}
</script>

<style lang="scss" scoped>
.divider {
  height: 1px;
  background: $color-primary;
  margin: 5px 0;
  transition: .5s;
}
</style>
