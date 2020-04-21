import * as React from 'react';
import {
  HomeLink,
  AboutLink,
  TourLink,
  ContactLink,
  MusicLink,
  LetterLink
} from './Links'
import { useLocation } from 'react-router-dom'
import CN from 'classnames'

interface MainNavProps {
  className?: string;
  isOverlay?: boolean;
  onLinkClick?: () => void;
}

export default (props: MainNavProps) => {
  let { pathname } = useLocation();

  return (
    <nav className={CN('navbar', props.isOverlay ? 'overlay' : '', props.className)}>
      <HomeLink pathname={pathname} onClick={props.onLinkClick} />
      <MusicLink pathname={pathname} onClick={props.onLinkClick} />
      <TourLink pathname={pathname} onClick={props.onLinkClick} />
      <LetterLink pathname={pathname} onClick={props.onLinkClick} />
      <AboutLink pathname={pathname} onClick={props.onLinkClick} />
      <ContactLink pathname={pathname} onClick={props.onLinkClick} />
    </nav>
  )
}