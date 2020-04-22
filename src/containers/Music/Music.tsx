import * as React from 'react'
import { Album, VideoClip, TextConverter, MainNav } from '../../components'
import { Meshakech_Keevim } from '../../../static/Albums'
import { findDOMNode } from 'react-dom';

interface MusicProps {
  openModal: (content: React.ReactNode, isVideo?: boolean) => void;
}

const YTB_HEIGHT_RATIO = 0.5625
const YTB_WIDTH_RATIO = 1.7777


export default class Music extends React.Component<MusicProps, {}> {
  state = {
    videoHeight: 0,
    videoWidth: 0
  }

  componentDidMount () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  handleResize = () => {
   const containerWidth = window.innerWidth * 0.9
   const containerHeight = window.innerHeight * 0.9

   const maxWidth = Math.min(containerHeight * YTB_WIDTH_RATIO, containerWidth)

   this.setState({
    videoHeight: maxWidth * YTB_HEIGHT_RATIO,
    videoWidth: maxWidth
   })
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }
  
  getVideo = (videoLink?: string) => {
    if (!videoLink) {
      return undefined;
    }

    return () => this.props.openModal(<VideoClip src={videoLink}/>, true)
  }

  renderTracks = () => (
    Meshakech_Keevim.Tracks.map(track => {
      return {
        name: track.Name,
        onLyricsClick: () => this.props.openModal(<TextConverter text={track.Lyrics} />),
        onVideoClick: this.getVideo(track.VideoLink),
        isClip: track.IsClip
      }
    })
  )

  render () {
    return (
      <React.Fragment>
        <main className={'music'}>
          <h1>מוזיקה</h1>
          <hr/>
          <Album
            name={Meshakech_Keevim.Name}
            frontCover={Meshakech_Keevim.FrontCover}
            songs={this.renderTracks()}
          />
        </main>
      </React.Fragment>
    )
  }
}