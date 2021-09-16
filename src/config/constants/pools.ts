import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  

  {
    sousId: 0,
    tokenName: 'PNG',
    stakingTokenName: QuoteToken.PNG,
    stakingTokenAddress: '0x60781C2586D68229fde47564546784ab3fACA982',
    contractAddress: {
      97: '0x0628fDB71c92bd301F5aA8581e9913b6738C8439',
      56: '0x0628fDB71c92bd301F5aA8581e9913b6738C8439',
     137: '0x0628fDB71c92bd301F5aA8581e9913b6738C8439',
	 43114: '0x0628fDB71c92bd301F5aA8581e9913b6738C8439'
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://avax.antswap.club/',
    harvest: true,
    tokenPerBlock: '.000029',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  }

 

  
  
]

export default pools
