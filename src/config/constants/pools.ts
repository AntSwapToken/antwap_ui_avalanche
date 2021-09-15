import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  

  {
    sousId: 1,
    tokenName: 'PNG',
    stakingTokenName: QuoteToken.PNG,
    stakingTokenAddress: '0x60781C2586D68229fde47564546784ab3fACA982',
    contractAddress: {
      97: '0xd2A12e4Fd1Cb4b17a014D6149923e89544fc1873',
      56: '0xd2A12e4Fd1Cb4b17a014D6149923e89544fc1873',
     137: '0xd2A12e4Fd1Cb4b17a014D6149923e89544fc1873',
	 43114: '0xd2A12e4Fd1Cb4b17a014D6149923e89544fc1873'
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
