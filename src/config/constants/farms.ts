import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [

  // PNG Token - 0x60781C2586D68229fde47564546784ab3fACA982
  // Pool 0 - (ANT-USDC)  - Active
  // ----------------------------------------------------------
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'ANT-USDC_e',
    lpAddresses: {
      97: '0x013d701f57c916617989639582fbbcbb95518f3e',
      56: '0x013d701f57c916617989639582fbbcbb95518f3e',
      137: '0x013d701f57c916617989639582fbbcbb95518f3e',
      43114: '0x013d701f57c916617989639582fbbcbb95518f3e'  // ANT - USDC.e -
    },
    tokenSymbol: 'ANT',
    tokenAddresses: {
      97: '0x0C6C3641f83B66f72A374faC75149574A686Cd8B',
      56: '0x0C6C3641f83B66f72A374faC75149574A686Cd8B',
      137: '0x0C6C3641f83B66f72A374faC75149574A686Cd8B',
      43114: '0x0C6C3641f83B66f72A374faC75149574A686Cd8B' // ANT
    },
    quoteTokenSymbol: QuoteToken.USDC_e,
    quoteTokenAdresses: contracts.usdc_e,
  },

  // Pool 1 - (ANT) - Active
  // ----------------------------------------------------------
  {
   pid: 1,
   isTokenOnly: true,
   risk: 3,
   lpSymbol: 'ANT',
   lpAddresses: {
    97: '0x013d701f57c916617989639582fbbcbb95518f3e',
    56: '0x013d701f57c916617989639582fbbcbb95518f3e',
    137: '0x013d701f57c916617989639582fbbcbb95518f3e', 
    43114: '0x013d701f57c916617989639582fbbcbb95518f3e'  // ANT - USDC.e
   },
   tokenSymbol: 'ANT',
   tokenAddresses: {
    97: '0x0C6C3641f83B66f72A374faC75149574A686Cd8B',
    56: '0x0C6C3641f83B66f72A374faC75149574A686Cd8B',
    137: '0x0C6C3641f83B66f72A374faC75149574A686Cd8B', 
    43114: '0x0C6C3641f83B66f72A374faC75149574A686Cd8B'  // ANT  -
   },
   quoteTokenSymbol: QuoteToken.ANT,
   quoteTokenAdresses: contracts.ant,
   tokenDecimals: 18,
  },

  // 

  // Pool 2 - (ANT-PNG)  - Active
  // ----------------------------------------------------------
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'ANT-PNG',
    lpAddresses: {
      97: '0x15d40846dEC37Da3a24B8a861050bF137b82c38C',
      56: '0x15d40846dEC37Da3a24B8a861050bF137b82c38C',
      137: '0x15d40846dEC37Da3a24B8a861050bF137b82c38C',
      43114: '0x15d40846dEC37Da3a24B8a861050bF137b82c38C'  // ANT - PNG -
    },
    tokenSymbol: 'ANT',
    tokenAddresses: {
      97: '0x0C6C3641f83B66f72A374faC75149574A686Cd8B',
      56: '0x0C6C3641f83B66f72A374faC75149574A686Cd8B',
      137: '0x0C6C3641f83B66f72A374faC75149574A686Cd8B',
      43114: '0x0C6C3641f83B66f72A374faC75149574A686Cd8B' //  ANT
    },
    quoteTokenSymbol: QuoteToken.PNG,
    quoteTokenAdresses: contracts.png,
  },

  // Pool 3 - (PNG-WAVAX)  - Active
  // ----------------------------------------------------------
  
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'PNG-WAVAX',
    lpAddresses: {
      97: '0xd7538cABBf8605BdE1f4901B47B8D42c61DE0367',
      56: '0xd7538cABBf8605BdE1f4901B47B8D42c61DE0367',
      137: '0xd7538cABBf8605BdE1f4901B47B8D42c61DE0367',
      43114: '0xd7538cABBf8605BdE1f4901B47B8D42c61DE0367'  // PNG-WAVAX  -
    },
    tokenSymbol: 'PNG',
    tokenAddresses: {
      97: '0x60781C2586D68229fde47564546784ab3fACA982',
      56: '0x60781C2586D68229fde47564546784ab3fACA982',
      137: '0x60781C2586D68229fde47564546784ab3fACA982',
      43114: '0x60781C2586D68229fde47564546784ab3fACA982' //  PNG
    },
    quoteTokenSymbol: QuoteToken.WAVAX,
    quoteTokenAdresses: contracts.wavax,
  },

  // Pool 4 - (WBTC_e) - Active
  // ----------------------------------------------------------
  {
    pid: 4,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'WBTC_e',
    lpAddresses: {
     97: '0x2D8d5a8d1F82B28A6f50674802E39E7bDad466A4',
     56: '0x2D8d5a8d1F82B28A6f50674802E39E7bDad466A4',
     137: '0x2D8d5a8d1F82B28A6f50674802E39E7bDad466A4', 
     43114: '0x2D8d5a8d1F82B28A6f50674802E39E7bDad466A4'  // WBTC_e - USDC.e
    },
    tokenSymbol: 'WBTC_e',
    tokenAddresses: {
     97: '0x50b7545627a5162F82A992c33b87aDc75187B218',
     56: '0x50b7545627a5162F82A992c33b87aDc75187B218',
     137: '0x50b7545627a5162F82A992c33b87aDc75187B218', 
     43114: '0x50b7545627a5162F82A992c33b87aDc75187B218'  // WBTC_e  -
    },
    quoteTokenSymbol: QuoteToken.WBTC_e,
    quoteTokenAdresses: contracts.wbtc_e,
    tokenDecimals: 18,
   },

   // Pool 5 - (aUSD) - Active
  // ----------------------------------------------------------
  {
    pid: 5,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'aUSD',
    lpAddresses: {
     97: '0x4f2fa133C4EBee7618f1B740C8685DA432421631',
     56: '0x4f2fa133C4EBee7618f1B740C8685DA432421631',
     137: '0x4f2fa133C4EBee7618f1B740C8685DA432421631', 
     43114: '0x4f2fa133C4EBee7618f1B740C8685DA432421631'  // PNG - aUSD 
    },
    tokenSymbol: 'aUSD',
    tokenAddresses: {
     97: '0x23Ee3C29E28194C0a25F49F2E38f1143e7b0e0C5',
     56: '0x23Ee3C29E28194C0a25F49F2E38f1143e7b0e0C5',
     137: '0x23Ee3C29E28194C0a25F49F2E38f1143e7b0e0C5', 
     43114: '0x23Ee3C29E28194C0a25F49F2E38f1143e7b0e0C5'  // aUSD  -
    },
    quoteTokenSymbol: QuoteToken.AUSD,
    quoteTokenAdresses: contracts.ausd,
    tokenDecimals: 18,
   },

    // Pool 6 - (PNG) - Active
  // ----------------------------------------------------------
  {
    pid: 6,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'PNG',
    lpAddresses: {
     97: '0x1fFB6ffC629f5D820DCf578409c2d26A2998a140',
     56: '0x1fFB6ffC629f5D820DCf578409c2d26A2998a140',
     137: '0x1fFB6ffC629f5D820DCf578409c2d26A2998a140', 
     43114: '0x1fFB6ffC629f5D820DCf578409c2d26A2998a140'  // PNG - USDC.e 
    },
    tokenSymbol: 'PNG',
    tokenAddresses: {
     97: '0x60781C2586D68229fde47564546784ab3fACA982',
     56: '0x60781C2586D68229fde47564546784ab3fACA982',
     137: '0x60781C2586D68229fde47564546784ab3fACA982', 
     43114: '0x60781C2586D68229fde47564546784ab3fACA982'  // PNG  -
    },
    quoteTokenSymbol: QuoteToken.PNG,
    quoteTokenAdresses: contracts.png,
    tokenDecimals: 18,
   },







  // Pool 5 - (USDC_e) - Active
  // ----------------------------------------------------------
  /*
  {
    pid: 5,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'USDC_e',
    lpAddresses: {
     97: '0x013d701f57c916617989639582fbbcbb95518f3e',
     56: '0x013d701f57c916617989639582fbbcbb95518f3e',
     137: '0x013d701f57c916617989639582fbbcbb95518f3e', 
     43114: '0x013d701f57c916617989639582fbbcbb95518f3e'  // ANT - USDC.e
    },
    tokenSymbol: 'USDC_e',
    tokenAddresses: {
     97: '0x0C6C3641f83B66f72A374faC75149574A686Cd8B',
     56: '0x0C6C3641f83B66f72A374faC75149574A686Cd8B',
     137: '0x0C6C3641f83B66f72A374faC75149574A686Cd8B', 
     43114: '0x0C6C3641f83B66f72A374faC75149574A686Cd8B'  // USDC_e 
    },
    quoteTokenSymbol: QuoteToken.USDC_e,
    quoteTokenAdresses: contracts.usdc_e,
    tokenDecimals: 18,
   },
   */

   
  

  
]

export default farms
