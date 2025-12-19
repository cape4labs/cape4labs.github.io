import localFont from 'next/font/local';

export const dotGothic16 = localFont({
  src: [
    {
      path: '../../public/fonts/DotGothic16-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-dotgothic',
});

export const sortsMillGoudy = localFont({
  src: [
    {
      path: '../../public/fonts/SortsMillGoudy-Regular.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-goudy',
});