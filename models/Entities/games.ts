export type Game = {
  title: string;
  discount: number;
  price?: number;
  img: string;
  gamePosters?: GamePoster[];
  releaseDate: string;
  developer: string;
  description: string;
  configurations: {
    os: string;
    core: string;
    memory: string;
    graph: string;
    diskSpace: string;
  };
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
    ],
    releaseDate: '2020-12-10',
    developer: 'CD PROJECT RED',
    configurations: {
      os: '64-bit Windows 7, 64-bit Windows 8 (8.1) or 64-bit Windows 10',
      core: 'Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940',
      memory: '6 GB ОЗУ',
      graph: 'Nvidia GPU GeForce GTX 660 / AMD GPU Radeon HD 7870',
      diskSpace: '35 GB',
    },
    description: 'Cyberpunk 2077 — приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Вы играете за V, наёмника в поисках устройства, позволяющего обрести бессмертие.'
  },
  {
    title: 'Witcher 3: Wild Hunt',
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
    ],
    releaseDate: '2015-05-18',
    developer: 'CD PROJECT RED',
    configurations: {
      os: '64-bit Windows 7, 64-bit Windows 8 (8.1) or 64-bit Windows 10',
      core: 'Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940',
      memory: '6 GB ОЗУ',
      graph: 'Nvidia GPU GeForce GTX 660 / AMD GPU Radeon HD 7870',
      diskSpace: '35 GB',
    },
    description: 'Когда в Северных королевствах бушует война, вы заключаете величайший контракт своей жизни — отыскать Дитя предназначения, живое оружие, которое может изменить облик мира.'
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
    ],
    releaseDate: '2021-05-07',
    developer: 'Capcom',
    configurations: {
      os: '64-bit Windows 7, 64-bit Windows 8 (8.1) or 64-bit Windows 10',
      core: 'Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940',
      memory: '6 GB ОЗУ',
      graph: 'Nvidia GPU GeForce GTX 660 / AMD GPU Radeon HD 7870',
      diskSpace: '35 GB',
    },
    description: 'Испытайте survival horror, каким его еще не видели, в 8-й части легендарной серии — Resident Evil Village. Проработанная до мелочей графика, напряженная игра от первого лица и превосходное повествование сделают ужас как никогда реальным и неотвратимым.'
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
    ],
    releaseDate: '2016-04-11',
    developer: 'FromSoftware',
    configurations: {
      os: '64-bit Windows 7, 64-bit Windows 8 (8.1) or 64-bit Windows 10',
      core: 'Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940',
      memory: '6 GB ОЗУ',
      graph: 'Nvidia GPU GeForce GTX 660 / AMD GPU Radeon HD 7870',
      diskSpace: '35 GB',
    },
    description: 'Dark Souls продолжит испытывать игроков на прочность в новой главе знаменитой серии, собравшей множество наград и определившей лицо жанра. Соберитесь с духом и погрузитесь во тьму!\n'
  },
]

export const getGameByTitle = (title: string) => {
  return games.find(game => game.title === title)
}
export const priceWithDiscount = (game: Game) => {
  return (game.price * (1 - game.discount)).toFixed();
}
export const getGameDiscount = (game: Game) => {
  return game.discount * 100 + `%`
}
