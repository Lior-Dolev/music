import * as React from 'react';
import {
  FacebookLink,
  InstagramLink,
  YoutubeLink,
  AppleLink,
  SpotifyLink
} from './Links'
import './SocialNav.styl'

export default class SocialNav extends React.Component {
  render() {
    return (
      <nav className={'ld-social-nav'}>
        <FacebookLink />
        <InstagramLink />
        <YoutubeLink />
        <AppleLink />
        <SpotifyLink />
      </nav>
    )
  }
}