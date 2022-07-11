export default {
  id: 'morocco-1', // DEPRECATE, only used for Lunie extension, NOT CHAIN ID
  name: 'Chronic Chain',
  description: 'Agoric is a cryptoeconomy with JS smart contracts.',
  logo: `homescreen400.png`,
  website: 'https://agoric.com',
  apiURL: 'https://api-chronic.zenchainlabs.io' , // use `npx lcp --proxyUrl http://34.123.30.100:1317`
  rpcURL: 'wss://rpc-chronic.zenchainlabs.io',
  stakingDenom: 'CHT',
  coinLookup: [
    {
      viewDenom: 'CHT',
      chainDenom: 'ucht',
      chainToViewConversionFactor: 1e-6,
      icon: `/currencies/bld.png`,
    },
    {
      viewDenom: 'CGAS',
      chainDenom: 'ucgas',
      chainToViewConversionFactor: 1e-6,
      icon: `/currencies/run.png`,
    },
  ],
  addressPrefix: 'chronic',
  validatorAddressPrefix: 'chronicvaloper',
  validatorConsensusaddressPrefix: 'chronicvalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/564'/0'/0/0`,
  lockUpPeriod: `21 days`,
  fees: {
    default: {
      gasEstimate: 350000,
      feeOptions: [
        {
          denom: 'CGAS',
          amount: 0.001,
        },
      ],
    },
  },
  icon: `/favicon.png`,

  // This is only to be used as a developer tool and for testing purposes
  // NEVER ENABLE LOCALSIGNING IN PRODUCTION OR FOR MAINNETS
  localSigning: false,
}
