import { Bellefair, Barlow, Barlow_Condensed } from 'next/font/google'

export const bellefair = Bellefair({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bellefair',
})

export const barlow = Barlow({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-barlow',
})

export const barlowCondensed = Barlow_Condensed({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
})