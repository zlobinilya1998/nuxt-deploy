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
    title: 'Cyberpunk',
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
]

export const priceWithDiscount = (game: Game) => {
  return (game.price * (1 - game.discount)).toFixed();
}
