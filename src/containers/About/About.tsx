import * as React from 'react'
import { TextualPage } from '../../components'
import TextPages from '../../../static/TextPages'

export default class About extends React.Component {
  render () {
    return (
      <TextualPage
        title={'אודות'}
        content={TextPages.About}
      />
    )
  }
}