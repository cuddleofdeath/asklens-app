import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider, createTheme } from '@nextui-org/react';

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primaryBg: '#00ebc7',
      primaryText: '#fff',
      myColor: 'red',
      secondary: 'blue',
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
