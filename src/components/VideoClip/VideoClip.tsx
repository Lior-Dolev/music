import * as React from 'react'

interface VideoClipProps {
  src?: string;
  width?: number;
  height?: number;
}

export default class VideoClip extends React.Component<VideoClipProps, {}> {
  render() {
    return (
      <iframe
        src={`${this.props.src}?rel=0`}
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        width={this.props.width}
        height={this.props.height}
      />
    )
  }
}