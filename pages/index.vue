<template>
  <div class='products-wrapper'>
    <img class='product'  style='grid-column: span 2;' src='images/sale.png' alt='photo'/>
    <img class='product'  style='grid-row: span 2;' src='images/girl.png' alt='photo'/>
    <img class='product'  style='grid-row: span 2;' src='images/girl2.png' alt='photo'/>
    <img class='product'  style='grid-column: span 2;' src='images/sale2.png' alt='photo'/>
    <img class='product'  style='grid-row: span 2;' src='images/girl3.png' alt='photo'/>
    <img class='product'  style='grid-row: span 2;' src='images/girl4.png' alt='photo'/>
    <img class='product'  style='grid-column: span 2;' src='images/girl5.png' alt='photo'/>
    <img class='product'  style='grid-column: span 2;' src='images/girl6.png' alt='photo'/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component } from 'vue-property-decorator';
@Component
export default class Index extends Vue {

}
</script>
<style scoped lang='scss'>
.products-wrapper {
  display: grid;
  grid-template-columns: repeat(4,minmax(0,270px));
  grid-gap: 15px;
  grid-auto-rows: 180px;
}
.product {
  border-radius: 10px;
  cursor: pointer;
  transition: .3s;
  filter: grayscale(20%);
  max-width: 100%;
  width: 100%;object-fit: cover;
  height: 100%;
  &:hover {
    filter: grayscale(0);
  }
}
</style>
