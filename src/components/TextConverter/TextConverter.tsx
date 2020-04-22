import * as React from 'react'
import * as _ from 'lodash'
// import './TextConverter.styl'

interface TextConverterProps {
  text: string
}

export default class TextConverter extends React.Component<TextConverterProps, {}> {
  render () {
    const [title, underline, ...lyrics] = this.props.text.split('\n')

    return (
      <article className={'lyrics'}>
        <h3>{title}</h3>
        <span>{underline}</span>
        <section>
          {lyrics.map((line, i) => _.isEmpty(line) ? <br key={i} /> : <p key={i}>{line}</p>)}
        </section>
      </article>
    )
  }
}