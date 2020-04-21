import * as React from 'react';
import { IconProps } from './index'

export default class CloseIcon extends React.Component<IconProps, {}> {
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
        <path d="M 12.71875 3.234375 C 12.5 3.019531 12.148438 3.019531 11.929688 3.234375 L 8.160156 7.003906 L 4.394531 3.234375 C 4.175781 3.019531 3.824219 3.019531 3.605469 3.234375 C 3.386719 3.453125 3.386719 3.808594 3.605469 4.023438 L 7.371094 7.792969 L 3.605469 11.5625 C 3.386719 11.777344 3.386719 12.132812 3.605469 12.351562 C 3.714844 12.460938 3.855469 12.511719 4 12.511719 C 4.140625 12.511719 4.285156 12.460938 4.394531 12.351562 L 8.160156 8.582031 L 11.929688 12.351562 C 12.039062 12.460938 12.179688 12.511719 12.324219 12.511719 C 12.46875 12.511719 12.609375 12.460938 12.71875 12.351562 C 12.9375 12.132812 12.9375 11.777344 12.71875 11.5625 L 8.949219 7.792969 L 12.71875 4.023438 C 12.9375 3.808594 12.9375 3.453125 12.71875 3.234375 Z M 12.71875 3.234375 "/>
      </svg>
    )
  }
}
