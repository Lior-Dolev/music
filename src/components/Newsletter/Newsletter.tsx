import * as React from 'react'
import { Button, Input } from '../index';
import './Newsletter.styl'

export default class Newsletter extends React.Component {
  render() {
    return (
      <div className={'ld-newsletter-wrapper'}>
        <title id={'newsletter-title'}>בואו להיות חברי העט שלי</title>
        <div
          className={'ld-newsletter'}
          aria-labelledby={'newsletter-title'}
        >
          <Input
            type={'email'}
            placeholder={'mail@gmail.com'}
          />
          <Button>
            הרשמה
          </Button>
        </div>
      </div>
    )
  }
}