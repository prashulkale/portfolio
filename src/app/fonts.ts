import localFont from 'next/font/local';

export const voyageRegular = localFont({
  src: [
    {
      path: '../../public/fonts/voyageRegular.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-voyage-regular',
});