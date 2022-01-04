export type Game = {
  title: string;
  discount: number;
  price?: number;
  img: string;
  gamePosters?: GamePoster[];
}
export type GamePoster = {
  img: string;
}

export const games: Game[] = [
  {
    title: 'Cyberpunk 2077',
    discount: 0.35,
    price: 1990,
    img: require('@/assets/games/cyberpunk.jpeg'),
    gamePosters: [
      {
        img: require('@/assets/games/cyberpunk2.jpg'),
      },
      {
        img: require('@/assets/games/cyberpunk3.jpg'),
      },
      {
        img: require('@/assets/games/cyberpunk4.jpg'),
      },
    ]
  },
  {
    title: 'Witcher',
    discount: 0.60,
    price: 990,
    img: require('@/assets/games/witcher.jpg'),
    gamePosters: [
      {
        img: require('@/assets/games/witcher2.webp'),
      },
      {
        img: require('@/assets/games/witcher3.jpg'),
      },
      {
        img: require('@/assets/games/witcher4.jpg'),
      },
    ]
  },
  {
    title: 'Resident Evil Village',
    discount: 0.35,
    price: 2699,
    img: require('@/assets/games/re.jpeg'),
    gamePosters: [
      {
        img: require('@/assets/games/re1.jpg'),
      },
      {
        img: require('@/assets/games/re2.jpg'),
      },
      {
        img: require('@/assets/games/re3.jpg'),
      },
    ]
  },
  {
    title: 'DARK SOULS |||',
    discount: 0.75,
    price: 2500,
    img: require('@/assets/games/ds.jpg'),
    gamePosters: [
      {
        img: require('@/assets/games/ds1.jpg'),
      },
      {
        img: require('@/assets/games/ds2.jpg'),
      },
      {
        img: require('@/assets/games/ds3.jpg'),
      },
    ]
  },
]

export const priceWithDiscount = (game: Game) => {
  return (game.price * (1 - game.discount)).toFixed();
}
