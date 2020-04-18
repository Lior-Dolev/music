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
import './MainNav.styl'

export default () => {
  let { pathname } = useLocation();

  return (
    <nav className={'ld-main-nav'}>
      <HomeLink pathname={pathname} />
      <MusicLink pathname={pathname} />
      <TourLink pathname={pathname} />
      <LetterLink pathname={pathname} />
      <AboutLink pathname={pathname} />
      <ContactLink pathname={pathname} />
    </nav>
  )
}


// interface NavLinkProps {
//   to: string;
//   text: string;
//   pathname: string;
// }

// interface LinkProps {
//   pathname: string;
// }

// export const paths = {
//   HOME: { path: '/', text: 'בית' },
//   MUSIC: { path: '/music', text: 'מוזיקה' },
//   TOUR: { path: '/tour', text: 'הופעות' },
//   LETTER: { path: '/letter', text: 'מכתב ממני' },
//   ABOUT: { path: '/about', text: 'אודות' },
//   CONTACT: { path: '/contact', text: 'צור קשר' }
// }

// const NavLink: React.FC<NavLinkProps> = ({ to, text, pathname }) => (
//   <Link to={to} className={to === pathname ? 'selected': ''} >{text}</Link>
// )

// export const HomeLink = (props: LinkProps) => (
//   <NavLink to={paths.HOME.path} text={paths.HOME.text} pathname={props.pathname} />
// )

// export const AboutLink = (props: LinkProps) => (
//   <NavLink to={paths.ABOUT.path} text={paths.ABOUT.text} pathname={props.pathname} />
// )

// export const TourLink = (props: LinkProps) => (
//   <NavLink to={paths.TOUR.path} text={paths.TOUR.text} pathname={props.pathname} />
// )

// export const ContactLink = (props: LinkProps) => (
//   <NavLink to={paths.CONTACT.path} text={paths.CONTACT.text} pathname={props.pathname} />
// )

// export const MusicLink = (props: LinkProps) => (
//   <NavLink to={paths.MUSIC.path} text={paths.MUSIC.text} pathname={props.pathname} />
// )
