<template>
  <div class='game' @mouseleave='clearBackground'>
    <transition name='slide' mode='out-in' appear>
      <img :src='hoverSrc ? hoverSrc : game.img' ref='game-img' class='game-img' alt='game-img' :key='gameImgKey'/>
    </transition>
    <div class='game-price'>
      <h3 class='game-title' v-text='game.title' />
      <div class='pct-price' v-text='`-` + game.discount * 100 + `%`'/>
      <del class='started-price' v-text='game.price + ` руб.`'/>
      <div class='final-price' v-text='priceWithDiscount(game) + ` руб.`'/>
    </div>
    <div class='game-expand'>
      <div @click='gamePage(game.title)' @mouseenter='setNewBackground(poster.img)' class='expand-game' :class='{"active": poster.img === hoverSrc}' v-for='(poster, idx) in game.gamePosters' :key='idx' :style='{backgroundImage: `url(${poster.img})`}'/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref } from 'vue-property-decorator'
import { Game, priceWithDiscount } from '~/models/Entities/games'

@Component({})
export default class GameCard extends Vue {
  gameImgKey:number = 0;
  hoverSrc = null;
  @Prop({required: true}) game:Game;
  @Ref('game-img') gameImg;
  priceWithDiscount(game: Game){
    return priceWithDiscount(game)
  }
  setNewBackground(posterImg: string){
    this.gameImgKey += 1;
    this.hoverSrc = posterImg;
  }
  gamePage(name: string){
    this.$router.push('/game/' + name)
  }
  clearBackground(){
    this.hoverSrc = null;
  }
}
</script>

<style lang="scss">
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
    font-size: 2rem;
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
    font-size: 2rem;
    transition: .3s;
    border: 1px solid transparent;
  }
  .started-price {
    color: #afadad;
    font-size: 2rem;
  }
  .final-price {
    color: #FFFFFF;
    font-size: 2.2rem;
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
      &:hover, &.active {
        outline: 1px solid skyblue;
        box-shadow: unset;
        filter: grayscale(0);
      }
    }
  }



  .slide-enter-active, .slide-leave-active {
    transition: opacity .2s;
  }
  .slide-enter, .slide-leave-to {
    opacity: 0;
  }
}
</style>
