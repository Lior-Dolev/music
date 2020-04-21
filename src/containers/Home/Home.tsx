import * as React from 'react';
import { VideoClip } from '../../components'
import { Meshakech_Keevim } from '../../../static/Albums'

export default class Home extends React.Component {
  render () {
    return (
      <main className={'home'}>
        <h1>ליאור דולב</h1>
        <VideoClip src={Meshakech_Keevim.Tracks[0].VideoLink} />
        <img className={'img'} src={Meshakech_Keevim.FrontCover} />
      </main>
    )
  }
}