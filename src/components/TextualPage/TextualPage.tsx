import * as React from 'react'
import * as _ from 'lodash'

interface TextualPageProps {
  title: string;
  content: string;
}

export default (props: TextualPageProps) => {
  const lines = props.content.split('\n')

  const renderContent = () => (
    lines.map((line, i) => _.isEmpty(line) ?
      <br key={i} /> :
      <p key={i}>{line}</p>
    )
  )

  return (
    <main className={'textual-page'}>
      <h1>{props.title}</h1>
      <article>
        {renderContent()}
      </article>
    </main>
  )
}
  
