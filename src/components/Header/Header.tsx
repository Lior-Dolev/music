import * as React from 'react';

export type HeaderProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

export default class Header extends React.Component<HeaderProps, {}> {
  render() {
    const {
      children,
      style
    } = this.props;
    return (
      <header
        style={style}
      >
        {children}
      </header>
    )
  }
}