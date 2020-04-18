import * as React from 'react'
import * as _ from 'lodash'
import './TextConverter.styl'

interface TextConverterProps {
  text: string
}

export default class TextConverter extends React.Component<TextConverterProps, {}> {
  render () {
    const lines = this.props.text.split('\n')

    return (
      <article className={'lyrics'}>
        {lines.map((line, i) => _.isEmpty(line) ? <br key={i} /> : <p key={i}>{line}</p>)}
      </article>
    )
  }
}