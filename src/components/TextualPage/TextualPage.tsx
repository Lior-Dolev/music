import * as React from 'react'
import * as _ from 'lodash'
import CN from 'classnames'

interface TextualPageProps {
  title: string;
  content: string;
  className?: string;
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
    <main className={CN('textual-page', props.className)}>
      <h1>{props.title}</h1>
      <article>
        {renderContent()}
      </article>
    </main>
  )
}
  
