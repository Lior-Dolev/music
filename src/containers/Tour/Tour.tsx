import * as React from 'react'
import { TextualPage } from '../../components'
import TextPages from '../../../static/TextPages'

export default class Tour extends React.Component {
  render () {
    return (
      <TextualPage
        title={'הופעות'}
        content={TextPages.Tour}
      />
    )
  }
}