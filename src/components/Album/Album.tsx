import * as React from 'react'

interface Song {
  name: string;
  onLyricsClick: () => void;
  onVideoClick?: () => void;
}

class AlbumProps {
  name: string = ''
  frontCover: string = ''
  songs?: Array<Song> = []
}

interface SongRowProps {
  key: string;
  name: string;
  number: number;
  onLyricsClick: () => void;
  onVideoClick?: () => void;
}

const SongRow = (props: SongRowProps) => (
  <li role="song item">
    <h2 role={'info'} className={'right'}>
      <span role={'song number'}>{props.number}.</span>
      <span role={'song name'}>{props.name}</span>
    </h2>
    <span role={'links'} className={'left'}>
      {props.onVideoClick && <button onClick={props.onVideoClick}>קליפ</button>}
      <button onClick={props.onLyricsClick}>מילים</button>
    </span>
  </li>
)

export default class Album extends React.Component<AlbumProps, {}> {
  render () {
    const {
      name,
      frontCover,
      songs
    } = this.props

    return (
      <article className={'album'}>
        <h1>{name}</h1>
        <section>
          <ul role="album content">
            {songs && songs.map((song, i) =>
              <SongRow
                key={`${name}-${song.name}`}
                {...song}
                number={(i + 1)}
              />
            )}
          </ul>
          <img className={'img'} src={frontCover} alt={'עטיפת האלבום'} />
        </section>
      </article>
    )
  }
}