import * as React from 'react';
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  AppleIcon,
  SpotifyIcon
} from '../index'

export const FacebookLink = () => (
  <a className={'link'} href={'https://www.facebook.com/liordolevofficial'} target="_blank"><FacebookIcon fill={'white'} /></a>
)

export const InstagramLink = () => (
  <a className={'link'} href={'https://www.instagram.com/liordolev'} target="_blank"><InstagramIcon fill={'white'} /></a>
)

export const YoutubeLink = () => (
  <a className={'link'} href={'https://www.youtube.com/user/liordolev'} target="_blank"><YoutubeIcon fill={'white'} /></a>
)

export const AppleLink = () => (
  <a className={'link'} href={'https://apple.co/2yyAtZJ'} target="_blank"><AppleIcon fill={'white'} /></a>
)

export const SpotifyLink = () => (
  <a className={'link'} href={'https://spoti.fi/3bwNfX8'} target="_blank"><SpotifyIcon fill={'white'} /></a>
)