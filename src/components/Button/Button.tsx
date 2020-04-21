import * as React from 'react'

const DEFAULT_DIMENSIONS = {
  height: 30,
  width: 100
}

interface InternalButtonProps {
  defaultDimensions?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

export type ButtonProps = InternalButtonProps & React.HTMLProps<HTMLButtonElement>

export default class Button extends React.Component<ButtonProps, {}> {
  static defaultProps = {
    defaultDimensions: false,
    type: 'button'
  }

  getStyle = () => {
    return {
      height: DEFAULT_DIMENSIONS.height,
      width: DEFAULT_DIMENSIONS.width
    }
  }

  render () {
    const {
      defaultDimensions,
      children,
      ...rest
    } = this.props

    return (
      <button
        style={defaultDimensions ? this.getStyle() : {}}
        className={'button'}
        {...rest}
      >
        {children}
      </button>
    )
  }
}

