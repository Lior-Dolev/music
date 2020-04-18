import * as React from 'react';
import { IconProps } from './index'

export default class FacebookIcon extends React.Component<IconProps, {}> {
  static defaultProps = {
    fill: '#000000',
    width: '3em',
    height: '3em'
  }

  render() {
    const {
      fill,
      width,
      height
    } = this.props

    return (
      <svg fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={width} height={height}>
        <path d="M 11.695312 8.933594 L 12.136719 6.058594 L 9.378906 6.058594 L 9.378906 4.191406 C 9.378906 3.40625 9.765625 2.640625 11 2.640625 L 12.253906 2.640625 L 12.253906 0.195312 C 12.253906 0.195312 11.113281 0 10.027344 0 C 7.757812 0 6.273438 1.375 6.273438 3.867188 L 6.273438 6.058594 L 3.746094 6.058594 L 3.746094 8.933594 L 6.273438 8.933594 L 6.273438 15.878906 C 6.777344 15.957031 7.296875 16 7.824219 16 C 8.355469 16 8.871094 15.957031 9.378906 15.878906 L 9.378906 8.933594 Z M 11.695312 8.933594" />
      </svg>
    )
  }
}