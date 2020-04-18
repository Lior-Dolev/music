import * as React from 'react';
import CN from 'classnames';
import './Input.styl';

const DEFAULT_DIMENSIONS = {
  height: 30,
  width: 100
}

const CN_PREFIX = 'ld'
const INPUT_CN = `${CN_PREFIX}-inp`

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
        className={CN(INPUT_CN, className)}
        {...rest}
      />
    )
  }
}