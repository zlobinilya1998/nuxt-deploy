<template>
  <div class='games-wrapper'>
    <div class='game' v-for='(game,index) in games' :key='index' :style='{backgroundImage: `url(${game.img})`}'>
      <div class='game-price'>
        <div class='pct-price' v-text='`-` + game.discount * 100 + `%`'/>
        <del class='started-price' v-text='game.price + ` руб.`'/>
        <div class='final-price' v-text='priceWithDiscount(game) + ` руб.`'/>
      </div>
      <div class='game-expand'>
        <div class='expand-game' v-for='(subgame, index) in game.subgames' :key='index' :style='{backgroundImage: `url(${subgame.img})`}'/>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Index extends Vue {
  games: Game[] = [
    {
      title: 'Cyberpunk',
      discount: 0.35,
      price: 1990,
      img: require('@/assets/games/cyberpunk.jpeg'),
      subgames: [
        {
          title: 'Cyberpunk',
          discount: 0.35,
          price: 1990,
          img: require('@/assets/games/cyberpunk2.jpg'),
        },
        {
          title: 'Cyberpunk',
          discount: 0.35,
          price: 1990,
          img: require('@/assets/games/cyberpunk3.jpg'),
        },
        {
          title: 'Cyberpunk',
          discount: 0.35,
          price: 1990,
          img: require('@/assets/games/cyberpunk4.jpg'),
        },
      ]
    },
    {
      title: 'Cyberpunk',
      discount: 0.35,
      price: 1990,
      img: require('@/assets/games/cyberpunk.jpeg'),
      subgames: [
        {
          title: 'Cyberpunk',
          discount: 0.35,
          price: 1990,
          img: require('@/assets/games/cyberpunk2.jpg'),
        },
        {
          title: 'Cyberpunk',
          discount: 0.35,
          price: 1990,
          img: require('@/assets/games/cyberpunk3.jpg'),
        },
        {
          title: 'Cyberpunk',
          discount: 0.35,
          price: 1990,
          img: require('@/assets/games/cyberpunk4.jpg'),
        },
      ]
    },
    {
      title: 'Cyberpunk',
      discount: 0.35,
      price: 1990,
      img: require('@/assets/games/cyberpunk.jpeg'),
      subgames: [
        {
          title: 'Cyberpunk',
          discount: 0.35,
          price: 1990,
          img: require('@/assets/games/cyberpunk2.jpg'),
        },
        {
          title: 'Cyberpunk',
          discount: 0.35,
          price: 1990,
          img: require('@/assets/games/cyberpunk3.jpg'),
        },
        {
          title: 'Cyberpunk',
          discount: 0.35,
          price: 1990,
          img: require('@/assets/games/cyberpunk4.jpg'),
        },
      ]
    },
  ]
  priceWithDiscount(game: Game){
    return (game.price * (1 - game.discount)).toFixed();
  }
}

type Game = {
  title: string;
  discount: number;
  price: number;
  img: string;
  subgames?: Game[];
}


</script>
<style scoped lang='scss'>
.games-wrapper {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-auto-rows: minmax(400px, 400px);
  grid-gap: 20px;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
}
.game {
  overflow: hidden;
  position: relative;
  transition: .6s;
  background-position: left center;
  border-radius: 10px;
  background-repeat: no-repeat;
  &:hover {
    background-position: center;
    & .game-expand {
      top: 75%;
    }
    & .game-price {
      bottom: 30%;
    }
  }
  .game-price {
    position: absolute;
    bottom: 0;
    right: 0;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3,minmax(50px,auto));
    text-align: center;
    background: rgba(0, 0, 0);
    transition: .6s;
    & > * {
      padding: 6px 7px;
      box-shadow: 0px 20px 31px -14px rgba(34, 60, 80, 0.5) inset;
    }
  }
  .pct-price {
    background: #b2f64c;
    color: black;
    font-weight: bold;
    font-size: 1.3rem;
  }
  .started-price {
    color: #afadad;
  }
  .final-price {
    color: #FFFFFF;
    font-size: 1.3rem;
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
      height: 80px;
      transition: .3s;
      outline: 1px solid transparent;
      border-radius: 5px;
      &:hover {
        outline: 1px solid skyblue;
      }
    }
  }
}
</style>
