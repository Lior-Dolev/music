import * as React from 'react'
import { Button, Input } from '../index';

export default class Newsletter extends React.Component {
  render() {
    return (
      <article className={'newsletter'}>
        <label className={'form-label'}>בואו להיות חברי העט שלי</label>
        <form className={'form-inline'}>
          <Input
            type={'email'}
            placeholder={'mail@gmail.com'}
          />
          <Button>
            הרשמה
          </Button>
        </form>
      </article>
    )
  }
}