import * as React from 'react';
import { IconProps } from './index'

export default class YoutubeIcon extends React.Component<IconProps, {}> {
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
        <path d="M 15.664062 4.148438 C 15.480469 3.460938 14.941406 2.917969 14.25 2.734375 C 13.003906 2.398438 8 2.398438 8 2.398438 C 8 2.398438 2.996094 2.398438 1.75 2.734375 C 1.058594 2.917969 0.519531 3.460938 0.335938 4.148438 C 0 5.398438 0 8 0 8 C 0 8 0 10.601562 0.335938 11.851562 C 0.519531 12.539062 1.058594 13.082031 1.75 13.265625 C 2.996094 13.601562 8 13.601562 8 13.601562 C 8 13.601562 13.003906 13.601562 14.25 13.265625 C 14.941406 13.082031 15.480469 12.539062 15.664062 11.851562 C 16 10.601562 16 8 16 8 C 16 8 16 5.398438 15.664062 4.148438 Z M 6.398438 10.398438 L 6.398438 5.601562 L 10.558594 8 Z M 6.398438 10.398438 "/>
      </svg>
    )
  }
}