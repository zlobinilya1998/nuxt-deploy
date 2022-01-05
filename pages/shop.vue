<template>
  <div class='shop-page'>
    <h1 class='top-sale'>Лидеры продаж</h1>
    <div class='games-wrapper'>
      <GameCard v-for='(game,index) in games' :key='index' :game='game'/>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component, Ref } from 'vue-property-decorator'
import { Game, games, priceWithDiscount } from '~/models/Entities/games'
import GameCard from '~/components/GameCard.vue'
@Component({
  components: { GameCard }
})
export default class Index extends Vue {
  games = games;
}
</script>
<style scoped lang='scss'>
.shop-page {
  .games-wrapper {
    display: grid;
    grid-template-columns: repeat(2, minmax(0,1fr));
    grid-auto-rows: 375px;
    grid-gap: 20px;
    justify-content: center;
    max-width: 1440px;
    margin: 0 auto;
    @media (max-width: $w-sm){
      grid-template-columns: 1fr;
    }
  }
  .top-sale {
    color: #FFFFFF;
    font-size: 2.3rem;
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    margin-bottom: 25px;
  }
}
</style>
