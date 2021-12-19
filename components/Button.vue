<template>
  <button @click="$emit('click')" class='button' :class="{'primary': primary,'secondary': secondary}">
    <slot/>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class Button extends Vue {
  @Prop(Boolean) primary: boolean;
  @Prop(Boolean) secondary: boolean;
}
</script>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  padding: 10px 20px;
  color: $color-secondary;
  background: transparent;
  transition: .3s;
  &.primary {
    border: 1px solid $color-primary;
    color: #FFFFFF;
    &:hover {
      background: $color-primary;
      color: $bg-primary;
    }
  }
  &.secondary {
    border: 1px solid $color-secondary;
    &:hover {
      background: $color-secondary;
      color: $bg-primary;
    }
  }
}

</style>
