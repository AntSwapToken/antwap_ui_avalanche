export type IfoStatus = 'coming_soon' | 'live' | 'finished'

export interface Ifo {
  id: string
  isActive: boolean
  address: string
  name: string
  subTitle?: string
  description?: string
  launchDate: string
  launchTime: string
  saleAmount: string
  raiseAmount: string
  cakeToBurn: string
  projectSiteUrl: string
  currency: string
  currencyAddress: string
  tokenDecimals: number
  releaseBlockNumber: number
}

export enum QuoteToken {
  'BNB' = 'BNB',
  'CAKE' = 'CAKE',
  'SYRUP' = 'SYRUP',
  'BUSD' = 'BUSD',

  'ANT' = 'ANT',

  'AWETH'='aWETH',
  'AUSD' = 'aUSD',


  'PNG' = 'PNG',
  'USDC_e' = 'USDC.e',
  'WBTC_e' = 'WBTC.e',
  'WAVAX' = 'WAVAX',
  'QI' =  'QI',
  'USDT_e' =  'USDT.e',
  'IRONICE' = 'IronICE'


 }

 export enum ImageName {
  'BNB' = 'bnb',
  'CAKE' = 'cake',
  'SYRUP' = 'syrup',
  'BUSD' = 'busd',
  'TWT' = 'twt',
  'UST' = 'ust',
  'STONK' = 'stonk',
  'WBTC' = 'wbtc',
  'WMATIC' = 'wmatic',
  'QUICK' = 'quick',
  'WETH' = 'weth',
  'ANT' = 'ant',
  'USDC' = 'usdc',
  'LAD' = 'lad',
  'RBAG' = 'rbag',

  'ICE' = 'ice',
  'BONE' = 'bone',
  'TITAN' = 'titan',
  'DINO' = 'dino',
  'DAI' = 'dai',
  'MRBALV3' = 'mrbalv3',
  'AUSD' = 'ausd',
  'AWETH' = 'aweth',

  'PNG' = 'png',
  'USDC_e' = 'usdc_e',

  'WAVAX' = 'wavax',
  'WBTC_e' = 'wbtce',
  'QI' =  'qi',

  'USDT_e' =  'usdt_e',

  'ironice' = 'ironice'
  

 }

export enum PoolCategory {
  'COMMUNITY' = 'Community',
  'CORE' = 'Core',
  'BINANCE' = 'Binance', // Pools using native BNB behave differently than pools using a token
  'AVALANCHE' = 'Avalanche'
}

export interface Address {
  97?: string
  56: string
  137?: string
  43114: string
}

export interface FarmConfig {
  pid: number
  lpSymbol: string
  lpAddresses: Address
  tokenSymbol: string
  tokenAddresses: Address
  quoteTokenSymbol: QuoteToken
  quoteTokenAdresses: Address
  multiplier?: string
  isTokenOnly?: boolean
  isCommunity?: boolean
  tokenDecimals?: number
  risk: number
  dual?: {
    rewardPerBlock: number
    earnLabel: string
    endBlock: number
  }
}

export interface PoolConfig {
  sousId: number
  image?: string
  tokenName: string
  stakingTokenName: QuoteToken
  stakingLimit?: number
  stakingTokenAddress?: string
  contractAddress: Address
  poolCategory: PoolCategory
  projectLink: string
  tokenPerBlock: string
  sortOrder?: number
  harvest?: boolean
  isFinished?: boolean
  tokenDecimals: number
}

export type Nft = {
  name: string
  description: string
  originalImage: string
  previewImage: string
  blurImage: string
  sortOrder: number
  bunnyId: number
}
