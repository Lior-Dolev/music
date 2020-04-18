import * as React from 'react'
import './Tour.styl'

export default class Tour extends React.Component {
  render () {
    return (
      <main className={'tour'}>
        <article>
          <p>כמו שאתם בטח כבר יודעים, הקורונה לא מאפשרת להופיע</p>
          <p>אני מחכה בקוצר רוח עד שאוכל להתרגש איתכם על הבמה</p>
          <p>אתם מוזמנים להצטרף לרשימת חברי העט שלי ואעדכן אתכם באופן אישי כשתקבע ההופעה הבאה</p>
          <p>עוד לא נפגשנו ואני כבר מתגעגעת</p>
        </article>
      </main>
    )
  }
}