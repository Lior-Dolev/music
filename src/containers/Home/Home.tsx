import * as React from 'react';
import { VideoClip } from '../../components'
import { Meshakech_Keevim } from '../../../static/Albums'
import './Home.styl'

export default class Home extends React.Component {
  render () {
    return (
      <main className={'home'}>
        <img src={Meshakech_Keevim.FrontCover} />
        <VideoClip src={Meshakech_Keevim.Tracks[0].VideoLink} />
      </main>
    )
  }
}