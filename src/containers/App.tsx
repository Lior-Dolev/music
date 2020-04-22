import * as React from 'react';
import {
	MainNav,
	Newsletter,
	SocialNav,
	MenuIcon,
	CloseIcon
} from '../components'
import { HashRouter } from 'react-router-dom'
import Routes from './Routes'
import { Modal } from './index'
import MediaQuery from 'react-responsive'
import '../index.styl'

const SM_MIN = 520
const SM_MAX = 767
const MD_MIN = 768
const LG_MIN = 1200

class App extends React.Component {
	state = {
		isModalOpen: false,
		modalContent: null,
		isCollaped: true,
		isMobileMenuOpen: true,
		isVideo: false
	}

	openModal = (content: React.ReactNode, isVideo?: boolean) => {
		this.setState({
			isModalOpen: true,
			modalContent: content,
			isVideo: isVideo
		})
	}

	closeModal = () => {
		this.setState({
			isModalOpen: false,
			modalContent: null
		})
	}

	render() {
		return (
			<HashRouter>
				<div className={'app'}>
					<header className={'bg-dark'}>
						<MediaQuery maxWidth={SM_MAX}>
							<button
								className={'menu-btn'}
								onClick={() => this.setState({isCollaped: !this.state.isCollaped})}
							>
								{ this.state.isCollaped && <MenuIcon /> }
								{ !this.state.isCollaped && <CloseIcon /> }
							</button>
							<SocialNav />
						</MediaQuery>
						<MediaQuery minWidth={MD_MIN}>
							<MainNav />
						</MediaQuery>
					</header>
					<Routes openModal={this.openModal} />
					{!this.state.isCollaped && <MainNav
						isOverlay={true}
						className={'bg-dark'}
						onLinkClick={() => this.setState({isCollaped: true})}
					/>}
					<footer className={'bg-dark'}>
						<Newsletter />
						<MediaQuery minWidth={MD_MIN}>
							<SocialNav />
						</MediaQuery>
					</footer>
				</div>
				{this.state.isModalOpen && <Modal isVideoDialog={this.state.isVideo} onClose={this.closeModal}>{this.state.modalContent}</Modal>}
			</HashRouter>
		);
	}
}

export default App;