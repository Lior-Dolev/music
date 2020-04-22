import * as React from 'react'
import { CloseIcon } from '../../components'

interface DialogProps {
  onClose: () => void;
  isVideoDialog?: boolean;
}

const YTB_HEIGHT_RATIO = 0.5625
const YTB_WIDTH_RATIO = 1.7777

export default class Dialog extends React.Component<DialogProps, {}> {
  node: any

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false)
    document.addEventListener('keydown', this.handleKey, false)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false)
    document.removeEventListener('keydown', this.handleKey, false)
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

  handleResize = () => {
    const containerWidth = window.innerWidth * 0.9
    const containerHeight = window.innerHeight * 0.9
 
    const maxWidth = Math.min(containerHeight * YTB_WIDTH_RATIO, containerWidth)
 
    return ({
     videoHeight: maxWidth * YTB_HEIGHT_RATIO,
     videoWidth: maxWidth
    })
   }

  renderVideo = () => {
    const size = this.handleResize()

    return (
      <div className={'dialog video'}>
        <div className={'container'} style={{height: size.videoHeight + 30, width: size.videoWidth + 30}}>
          <button style={{height: 30, width: 30}}><CloseIcon height={'30px'} width={'30px'}/></button>
          <div className={'dialog-window'} ref={node => this.node = node}>  
            {this.props.children}
          </div>
        </div>
        <div className={'dialog-mask'}></div>
      </div>
    )
  }

  renderLyricsModal = () => (
    <div className={'dialog'}>
      <div>
        <button><CloseIcon/></button>
        <div className={'dialog-window'} ref={node => this.node = node}>  
          {this.props.children}
        </div>
      </div>
      <div className={'dialog-mask'}></div>
    </div>
  )

  render () {
    return (this.props.isVideoDialog ?
    this.renderVideo() :
    this.renderLyricsModal())
  }
}
