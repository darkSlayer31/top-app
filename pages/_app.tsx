import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {Noto_Sans} from 'next/font/google';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale('ru');

const notoSans = Noto_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin', 'cyrillic'],
});

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${notoSans.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>MyTop - мой лучший топ</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
