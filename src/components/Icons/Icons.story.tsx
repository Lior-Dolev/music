
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {
  FacebookIcon,
  InstagramIcon,
  AppleIcon,
  SpotifyIcon,
  YoutubeIcon,
  MenuIcon
} from './index'

storiesOf("Icons", module)
  .add("Facebook", () => (
    <div>
      <FacebookIcon />
    </div>
  ))
  .add("Instagram", () => (
    <div>
      <InstagramIcon />
    </div>
  ))
  .add("Spotify", () => (
    <div>
      <SpotifyIcon />
    </div>
  ))
  .add("Apple", () => (
    <div>
      <AppleIcon />
    </div>
  ))
  .add("Youtube", () => (
    <div>
      <YoutubeIcon />
    </div>
  ))
  .add("Menu", () => (
    <div>
      <MenuIcon />
    </div>
  ))