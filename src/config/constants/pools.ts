import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  

  {
    sousId: 1,
    tokenName: 'QI',
    stakingTokenName: QuoteToken.QI,
    stakingTokenAddress: '0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5',
    contractAddress: {
      97: '0xFccf0c39E052316d36A76E222dE4dCD2fC7e4805',
      56: '0xFccf0c39E052316d36A76E222dE4dCD2fC7e4805',
     137: '0xFccf0c39E052316d36A76E222dE4dCD2fC7e4805',
	 43114: '0xFccf0c39E052316d36A76E222dE4dCD2fC7e4805'
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://avax.antswap.club/',
    harvest: true,
    tokenPerBlock: '.0025',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  }

 

  
  
]

export default pools
