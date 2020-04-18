import * as React from 'react';
import { Link } from 'react-router-dom';

export interface NavLinkProps {
  to: string;
  text: string;
  pathname: string;
}

export interface LinkProps {
  pathname: string;
}

export const paths = {
  HOME: { path: '/', text: 'בית' },
  MUSIC: { path: '/music', text: 'מוזיקה' },
  TOUR: { path: '/tour', text: 'הופעות' },
  LETTER: { path: '/letter', text: 'מכתב ממני' },
  ABOUT: { path: '/about', text: 'אודות' },
  CONTACT: { path: '/contact', text: 'צור קשר' }
}

const NavLink: React.FC<NavLinkProps> = ({ to, text, pathname }) => (
  <Link to={to} className={to === pathname ? 'selected': ''} >{text}</Link>
)

export const HomeLink = (props: LinkProps) => (
  <NavLink to={paths.HOME.path} text={paths.HOME.text} pathname={props.pathname} />
)

export const AboutLink = (props: LinkProps) => (
  <NavLink to={paths.ABOUT.path} text={paths.ABOUT.text} pathname={props.pathname} />
)

export const TourLink = (props: LinkProps) => (
  <NavLink to={paths.TOUR.path} text={paths.TOUR.text} pathname={props.pathname} />
)

export const ContactLink = (props: LinkProps) => (
  <NavLink to={paths.CONTACT.path} text={paths.CONTACT.text} pathname={props.pathname} />
)

export const LetterLink = (props: LinkProps) => (
  <NavLink to={paths.LETTER.path} text={paths.LETTER.text} pathname={props.pathname} />
)

export const MusicLink = (props: LinkProps) => (
  <NavLink to={paths.MUSIC.path} text={paths.MUSIC.text} pathname={props.pathname} />
)
