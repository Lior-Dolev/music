import * as React from 'react';
import { IconProps } from './index'

export default class AppleIcon extends React.Component<IconProps, {}> {
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
        <path d="M 11.726562 8.566406 C 11.710938 6.816406 13.152344 5.976562 13.21875 5.933594 C 12.40625 4.75 11.140625 4.585938 10.691406 4.566406 C 9.617188 4.457031 8.59375 5.199219 8.046875 5.199219 C 7.503906 5.199219 6.660156 4.582031 5.769531 4.597656 C 4.597656 4.617188 3.515625 5.28125 2.914062 6.332031 C 1.695312 8.445312 2.601562 11.574219 3.789062 13.289062 C 4.367188 14.128906 5.058594 15.070312 5.96875 15.035156 C 6.84375 15.003906 7.171875 14.472656 8.230469 14.472656 C 9.289062 14.472656 9.585938 15.035156 10.511719 15.019531 C 11.453125 15.003906 12.046875 14.164062 12.625 13.324219 C 13.289062 12.351562 13.5625 11.40625 13.578125 11.359375 C 13.558594 11.351562 11.746094 10.65625 11.726562 8.566406 Z M 11.726562 8.566406 "/>
        <path d="M 9.988281 3.433594 C 10.46875 2.847656 10.796875 2.035156 10.707031 1.226562 C 10.011719 1.257812 9.171875 1.691406 8.671875 2.273438 C 8.226562 2.792969 7.835938 3.617188 7.9375 4.410156 C 8.714844 4.46875 9.503906 4.015625 9.988281 3.433594 Z M 9.988281 3.433594 "/>
      </svg>
    )
  }
}