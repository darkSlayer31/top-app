import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {Noto_Sans} from 'next/font/google';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import ym from 'react-yandex-metrika';
import {YMInitializer} from 'react-yandex-metrika';

dayjs.locale('ru');

const notoSans = Noto_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin', 'cyrillic'],
});

export default function App({Component, pageProps, router}: AppProps) {
  router.events.on('routeChangeComplete', (url: string) => {
    if (typeof window !== undefined) {
      ym('hit', url);
    }
  });

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${notoSans.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>MyTop - мой лучший топ</title>
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
        <meta property="og:locale" content="ru_RU" />
      </Head>
      <YMInitializer
        accounts={[]}
        options={{
          webvisor: true,
          defer: true,
        }}
        version="2"
      />
      <Component {...pageProps} />
    </>
  );
}
