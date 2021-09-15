import { MenuEntry } from 'avax-antswaptoken-uikit'


const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://app.pangolin.exchange/#/swap?inputCurrency=0x0c6c3641f83b66f72a374fac75149574a686cd8b',
      },
      {
        label: 'Liquidity',
        href: 'https://app.pangolin.exchange/#/add/0x0c6c3641f83b66f72a374fac75149574a686cd8b/0x60781c2586d68229fde47564546784ab3faca982',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
    label: 'Dividends',
    icon: 'TicketIcon',
    href: '/profit',
  },
  {
    label: 'Charts',
    icon: 'InfoIcon',
    items: [
      {
          label: "Dex Guru Charts",
          href: "",
      },
      
      {
          label: "Poo Coin Charts",
          href: "",
      },
      {
          label: "SlingShot Charts",
          href: "",
      },
      {
        label: 'Github',
        href: '',
      },
      {
        label: 'Docs',
        href: '',
      },
      {
        label: 'Medium',
        href: 'https://medium.com/@antswaptoken',
      }
   ],
    
  },
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
              {
                  label: "English",
                  href: "https://t.me/AntSwapToken",
              },
              
              {
                  label: "Announcements",
                  href: "https://antswap.club/",
              },
           ],
  },
  {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/RebalanceT",
  },
]

export default config
