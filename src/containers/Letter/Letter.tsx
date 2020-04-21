import * as React from 'react'
import { TextualPage } from '../../components'
import TextPages from '../../../static/TextPages'

export default class Letter extends React.Component {
  render () {
    return (
      <TextualPage
        title={'מכתב ממני'}
        content={TextPages.Letter}
      />
    )
  }
}