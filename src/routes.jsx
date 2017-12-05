import React from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import App from './app';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Reviews from './components/Reviews'
import 'styles/index.scss';

export default class Routes extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={App} />
					<Route path="/Resume" component={Resume} />
					<Route path="/Contact" component={Contact} />
					<Route path="/Reviews" component={Reviews} />
					<Route path="/Github" component={() => { window.location = 'https://github.com/Mry0guy' }} />
				</div>
			</Router>
		)
	}
}
