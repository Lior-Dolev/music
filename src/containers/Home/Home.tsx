import * as React from 'react';
import { VideoClip } from '../../components'
import { Meshakech_Keevim } from '../../../static/Albums'
import { findDOMNode } from 'react-dom';

const YTB_HEIGHT_RATIO = 0.5625
const YTB_WIDTH_RATIO = 1.7777

export default class Home extends React.Component {
  node: any
  state = {
    videoHeight: 0,
    videoWidth: 0
	}

  componentDidMount () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  handleResize = () => {
   const containerWidth = (findDOMNode(this.node) as Element).clientWidth
   const containerHeight = (findDOMNode(this.node) as Element).clientHeight

   const maxWidth = Math.min(containerHeight * YTB_WIDTH_RATIO, containerWidth)

   this.setState({
    videoHeight: maxWidth * YTB_HEIGHT_RATIO,
    videoWidth: maxWidth
   })
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  render () {
    return (
      <main className={'home'}>
        <h1>ליאור דולב</h1>
        <article ref={node => this.node = node}>
          <VideoClip
            src={Meshakech_Keevim.Tracks[0].VideoLink}
            width={this.state.videoWidth}
            height={this.state.videoHeight}
          />
        </article>
      </main>
    )
  }
}