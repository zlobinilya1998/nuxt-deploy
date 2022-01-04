<template>
  <div class='game-page'>
    <h2 v-text='game.title' class='game-title'/>
    <div class='game-content'>
      <div>
        <img style='max-width: 100%;outline: 1px solid gray' :src='game.img' alt='game-logo'>
      </div>
      <div class='game-info'>
        <div>
          <img class='info-img' style='max-width: 100%;outline: 1px solid gray' ref='game-poster' alt='game-poster'>
        </div>
        <div>
          <p v-text='game.description' class='game-description'/>
          <p v-text='`Дата выхода: ` + getYearAndMonth(game.releaseDate) ' class='game-release'/>
          <p v-text='`Разработчик: ` + game.developer ' class='game-developer'/>
        </div>
      </div>
      <div class='purchase-game'>
        Купить {{game.title}}
        <div class='purchase-price'>
          <div v-text='`-` + gameDiscount'/>
          <div>
            <del v-text='game.price + " руб."'/>
            <div v-text='priceWithDiscount + " руб."'/>
          </div>
          <button v-text="'В корзину'"/>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue, Ref } from "vue-property-decorator"
import { Game, getGameByTitle, getGameDiscount, priceWithDiscount } from '@/models/Entities/games'
import { getYearAndMonth } from '@/utils/date'

@Component({})
export default class GamePage extends Vue {
  @Ref('game-poster') gamePoster;
  name = this.$route.params.name;
  game: Game = getGameByTitle(this.name);
  getYearAndMonth(date:string){
    return getYearAndMonth(date);
  }
  getRandomPhotoFromGame(){
    const posters = this.game.gamePosters;
    this.gamePoster.src = posters[Math.floor(Math.random() * posters.length)].img;
  }
  get gameDiscount(){
    return getGameDiscount(this.game)
  }
  get priceWithDiscount(){
    return priceWithDiscount(this.game);
  }
  mounted(){
    this.getRandomPhotoFromGame();
  }
}
</script>

<style lang="scss">
.game-page {
  .game-title {
    margin-bottom: 25px;
    font-size: 2rem;
    color: $color-secondary;
    font-weight: bold;
  }
  .game-description {
    font-size: 1.3rem;
  }
  .game-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 25px;
  }
  .game-info {
  }
  .info-img {
    box-shadow: 0px 0px 25px 7px rgb(188, 197, 203, 0.2);
  }
  .purchase-game {
    border: 1px solid gray;
    padding: 20px;
    position: relative;
  }
  .purchase-price {
    position: absolute;
    right: 25px;
    bottom: -10px;
    display: grid;
    align-items: stretch;
    grid-template-columns: repeat(3,minmax(60px,auto));
    background: black;
  }
}
</style>
