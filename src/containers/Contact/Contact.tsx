import * as React from 'react'
import './Contact.styl'

export default class Contact extends React.Component {
  render () {
    return (
      <main className={'contact'}>
        <h1>צור קשר</h1>
        <section>
          <h2>לפניות תקשורת:</h2>
          <h4>עמרי צורף</h4>
          <a href="tel:0547330371" data-content="0547330371" data-type="phone">
            <span>054-7330371</span>
          </a>
        </section>
        <section>
          <h2>לפניות נוספות:</h2>
          <a href="mailto:info@liordolev.com" target="_self" data-content="info@liordolev.com" data-type="mail">
            <span>info@liordolev.com</span>
          </a>
        </section>
      </main>
    )
  }
}