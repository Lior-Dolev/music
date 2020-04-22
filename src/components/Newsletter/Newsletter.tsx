import * as React from 'react'
import { Button, Input } from '../index';
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = '//liordolev.us4.list-manage.com/subscribe/post?u=d0be9ba97c5089c9a16515ff4&amp;id=6df0cf2fe1'

export default class Newsletter extends React.Component {
  state = {
    mail: ''
  }

  render() {
    return (
      <article className={'newsletter'}>
        <label className={'form-label'}>בואו להיות חברי העט שלי</label>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe }) => (
            <form className={'form-inline'}>
              <Input
                type={'email'}
                placeholder={'mail@gmail.com'}
                onChange={(e) => this.setState({ mail: (e.target as HTMLTextAreaElement).value})}
              />
              <Button onClick={() => subscribe({EMAIL: this.state.mail})}>
                הרשמה
              </Button>
            </form>
          )}
        >
        </MailchimpSubscribe>
      </article>
    )
  }
}