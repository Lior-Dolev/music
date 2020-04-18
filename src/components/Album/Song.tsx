import * as React from 'react'
// import { Link } from 'react-router-dom'

export interface SongProps {
  name: string;
  number: number;
  video?: React.ReactNode;
}

export default class Song extends React.Component<SongProps, {}> {
  render () {
    const {
      name,
      number,
      video
    } = this.props

    return (
      <section role="song">
        <h2>{`${number}. ${name}`}</h2>
        <section role="actions">
          <a href="#s">מילים</a>
          {video && <a>קליפ</a>}
        </section>
      </section>
    )
  }
}