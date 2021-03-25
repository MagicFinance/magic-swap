import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://cvvdefi.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.magic.finance',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.magic.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://magic.finance/farms',
  },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    href: 'https://magic.finance/staking',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: 'https://magic.finance/#/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://magic.finance/#/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: 'https://magic.finance/#/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x8688BeCe95EaFbd89a2Abc7183c348811838B46f',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x8688BeCe95EaFbd89a2Abc7183c348811838B46f',
      },
	  {
        label: 'Chart',
        href: 'https://goswapp-bsc.web.app/0x8688BeCe95EaFbd89a2Abc7183c348811838B46f',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/MagicFinance',
      },
      {
        label: 'Docs',
        href: 'https://magic-finance-defi.gitbook.io/magicfinance/',
      },
    ],
  },
  {
    label: 'Audit',
    icon: 'AuditIcon1',
    href: 'https://magic-finance-defi.gitbook.io/magicfinance/security/audit',
  },
  {
    label: 'Roadmap',
    icon: 'GooseIcon',
    href: 'https://magic-finance-defi.gitbook.io/magicfinance/roadmap',
  },
  {
    label: 'Timelock',
    icon: 'GooseIco1',
    href: 'https://magic-finance-defi.gitbook.io/magicfinance/security/timelock',
  },
  {
    label: 'Hybrid Burning Mechanism',
    icon: 'AuditIcon',
    href: 'https://magic-finance-defi.gitbook.io/magicfinance/tokenomics/hybrid-burning-mechanism',
  },
]

export default config
