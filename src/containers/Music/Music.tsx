import * as React from 'react'
import { Album, VideoClip, TextConverter, MainNav } from '../../components'
import { Meshakech_Keevim } from '../../../static/Albums'

interface MusicProps {
  openModal: (content: React.ReactNode) => void;
}

export default class Music extends React.Component<MusicProps, {}> {
  getVideo = (videoLink?: string) => {
    if (!videoLink) {
      return undefined;
    }

    return () => this.props.openModal(<VideoClip src={videoLink}/>)
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