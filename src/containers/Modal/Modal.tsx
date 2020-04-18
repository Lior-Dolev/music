import * as React from 'react'
import './Modal.styl'

interface DialogProps {
  onClose: () => void;
}

export default class Dialog extends React.Component<DialogProps, {}> {
  node: any

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false)
    document.addEventListener('keydown', this.handleClick, false)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false)
    document.removeEventListener('keydown', this.handleClick, false)
  }

  handleClick = (e: any) => {
    if (this.node.contains(e.target)) {
      return;
    }

    this.props.onClose()
  }

  handleKey = (e:any) => {
    if (e.keyCode === '27') {
      this.props.onClose()
    }
  }

  render () {
    return (
      <div className={'dialog'}>
        <div className={'dialog-window'} ref={node => this.node = node}>
          {this.props.children}
        </div>
        <div className={'dialog-mask'}></div>
      </div>
    )
  }
}
