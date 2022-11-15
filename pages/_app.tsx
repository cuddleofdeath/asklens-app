import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import dotenv from 'dotenv';
import merge from 'lodash.merge';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme as rainbowDarkTheme,
  midnightTheme,
  Theme,
} from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

// import { ApolloClient, InMemoryCache } from '@apollo/client';

// const APIURL = 'https://api-mumbai.lens.dev/';

// const apolloClient = new ApolloClient({
//   uri: APIURL,
//   cache: new InMemoryCache(),
// });

const { chains, provider } = configureChains(
  [chain.polygon],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const theme = createTheme({
  type: 'dark', // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#4ADE7B',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',

      gradient:
        'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd',

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primaryBg: '#00ebc7',
      primaryText: '#fff',
      myColor: 'red',
      secondary: 'blue',
      connectButtonBackground: 'blue !important',
      connectButtonBackgroundError: 'red',
      connectButtonInnerBackground: 'green',
      connectButtonText: 'yellow',
      connectButtonTextError: 'orange',
    },
  },
});

// const myTheme = merge(darkTheme(), {
//   colors: {
//     accentColor: '#07296d',
//   },
// } as Theme);

// const asklensTheme: Theme =  ({
//   theme: {
//     colors: {
// connectButtonBackground: '...',
// connectButtonBackgroundError: '...',
// connectButtonInnerBackground: '...',
// connectButtonText: '...',
// connectButtonTextError: '...',

//   });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        theme={rainbowDarkTheme({
          overlayBlur: 'small',
          accentColor: '#7b3fe4',
        })}
        chains={chains}
        modalSize='compact'
      >
        <NextUIProvider theme={theme}>
          <Component {...pageProps} />
        </NextUIProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
