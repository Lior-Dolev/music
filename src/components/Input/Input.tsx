import * as React from 'react';

const DEFAULT_DIMENSIONS = {
  height: 30,
  width: 100
}

interface InternalInputProps {
  defaultDimensions?: boolean;
  wrapperClassNames?: string;
}

export type InputProps = InternalInputProps & React.HTMLProps<HTMLInputElement>

export default class Input extends React.Component<InputProps, {}> {
  static defaultProps = {
    defaultDimensions: false
  }

  getStyle = () => {
    return {
      height: DEFAULT_DIMENSIONS.height,
      maxHeight: DEFAULT_DIMENSIONS.height,
      width: DEFAULT_DIMENSIONS.width
    }
  }

  render() {
    const {
      defaultDimensions,
      wrapperClassNames,
      className,
      ...rest
    } = this.props

    return (
      <input
        className={'input'}
        {...rest}
      />
    )
  }
}