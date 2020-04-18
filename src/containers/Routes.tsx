import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import {
	Home,
	Music,
	Tour,
	Letter,
	About,
  Contact
} from './index'
import { paths } from '../components'

interface RoutesProps {
  openModal: (content: React.ReactNode) => void;
}

export default (props: RoutesProps) => (
  <Switch>
    <Route exact path={paths.HOME.path} component={Home} />
    <Route path={paths.MUSIC.path} children={<Music openModal={props.openModal} />} />
    <Route path={paths.TOUR.path} component={Tour} />
    <Route path={paths.LETTER.path} component={Letter} />
    <Route path={paths.ABOUT.path} component={About} />
    <Route path={paths.CONTACT.path} component={Contact} />
    <Route path={'*'} >
      <Redirect to={paths.HOME.path} />
    </Route>
  </Switch>
)