import * as React from 'react';
import {
  FacebookLink,
  InstagramLink,
  YoutubeLink,
  AppleLink,
  SpotifyLink
} from './Links'
import CN from 'classnames'

interface SocialNavProps {
  className?: string;
}

export default class SocialNav extends React.Component<SocialNavProps, {}> {
  render() {
    return (
      <nav className={CN('social-nav', this.props.className)}>
        <SpotifyLink />
        <AppleLink />
        <YoutubeLink />
        <InstagramLink />
        <FacebookLink />
      </nav>
    )
  }
}