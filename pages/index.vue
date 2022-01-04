<template>
  <div class='shop-page'>
    <h2 class='top-sale'>Лидеры продаж</h2>
    <div class='games-wrapper'>
      <div class='game' v-for='(game,index) in games' :key='index'>
        <img :src='game.img' ref='game-img' class='game-img' alt='game-img'/>
        <div class='game-price'>
          <h3 class='game-title' v-text='game.title' />
          <div class='pct-price' v-text='`-` + game.discount * 100 + `%`'/>
          <del class='started-price' v-text='game.price + ` руб.`'/>
          <div class='final-price' v-text='priceWithDiscount(game) + ` руб.`'/>
        </div>
        <div class='game-expand'>
          <div @click='gamePage(game.title)' @mouseenter='setNewBackground(index,poster.img)' class='expand-game' v-for='(poster, idx) in game.gamePosters' :key='index' :style='{backgroundImage: `url(${poster.img})`}'/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component, Ref } from 'vue-property-decorator'
import { Game, games, priceWithDiscount } from '~/models/Entities/games'


@Component
export default class Index extends Vue {
  @Ref('game-img') gameImg;
  games = games;
  priceWithDiscount(game: Game){
    return priceWithDiscount(game)
  }
  setNewBackground(index:number,posterImg: string){
    const img = this.gameImg[index];
    img.src = posterImg;
  }
  gamePage(name: string){
    this.$router.push('/game/' + name)
  }
  clearBackground(index){
    const img = this.gameImg[index];
    const defaultImg = this.games[index].img;
    img.src = defaultImg;
  }
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
  .game {
    overflow: hidden;
    position: relative;
    transition: .6s;
    background-position: left center;
    background-size: contain;
    border-radius: 10px;
    background-repeat: no-repeat;
    border: 1px solid black;
    &:hover {
      & .game-expand {
        top: 70%;
      }
      & .game-price {
        bottom: 35%;
      }
      & .game-img {
        transform: scale(1.05);
      }
    }
    .game-title {
      font-size: 1.4rem;
      z-index: 1;
      color: #FFFFFF;
      font-weight: bold;
      font-family: Montserrat, sans-serif;
    }
    .game-price {
      position: absolute;
      bottom: 0;
      right: 0;
      display: grid;
      align-items: center;
      grid-template-columns: repeat(4,minmax(50px,auto));
      text-align: center;
      background: rgba(0, 0, 0);
      transition: .6s;
      & > * {
        padding: 6px 7px;
        box-shadow: 0px 20px 31px -14px rgba(34, 60, 80, 0.5) inset;
      }
    }
    .game-img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      max-width: 100%;
      height: 100%;
      object-fit: cover;
      transition: .6s;
    }
    .pct-price {
      background: #94c941;
      color: black;
      font-weight: bold;
      font-size: 1.3rem;
      transition: .3s;
      border: 1px solid transparent;
    }
    .started-price {
      color: #afadad;
    }
    .final-price {
      color: #FFFFFF;
      font-size: 1.3rem;
      font-weight: bold;
    }
    .game-expand {
      position: absolute;
      display: grid;
      max-width: 95%;
      width: 95%;
      grid-template-columns: repeat(3,1fr);
      grid-gap: 20px;
      height: 100%;
      left: 50%;
      transform: translateX(-50%);
      top: 100%;
      transition: .6s;
      .expand-game {
        cursor: pointer;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: -2px -1px 31px 4px rgba(34, 60, 80, 0.3) inset;
        filter: grayscale(0.2);
        height: 95px;
        transition: .3s;
        outline: 1px solid transparent;
        border-radius: 5px;
        &:hover {
          outline: 1px solid skyblue;
          box-shadow: unset;
          filter: grayscale(0);
        }
      }
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
