import * as React from 'react'

interface VideoClipProps {
  src?: string;
}

export default class VideoClip extends React.Component<VideoClipProps, {}> {
  render() {
    return (
      <iframe
        src={this.props.src}
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }
}