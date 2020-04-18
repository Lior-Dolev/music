import * as React from 'react';
import {
	MainNav,
	Newsletter,
	SocialNav
} from '../components'
import { HashRouter } from 'react-router-dom'
import Routes from './Routes'
import { Modal } from './index'
import '../index.styl'

class App extends React.Component {
	state = {
		isModalOpen: false,
		modalContent: null
	}

	openModal = (content: React.ReactNode) => {
		this.setState({
			isModalOpen: true,
			modalContent: content
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
					<header>
						<MainNav />
					</header>
					<Routes openModal={this.openModal} />
					<footer>
						<Newsletter />
						<SocialNav />
					</footer>
				</div>
				{this.state.isModalOpen && <Modal onClose={this.closeModal}>{this.state.modalContent}</Modal>}
			</HashRouter>
		);
	}
}

export default App;