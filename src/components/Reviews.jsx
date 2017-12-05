import React from 'react';
import Navigation from './Navigation'
import { Parallax } from 'react-parallax'
import Artical from './Artical'

const imgs = {
	bg: "https://i.imgur.com/XnpyoDH.jpg"
}

export default class Reviews extends React.Component {
	render() {
		return (
			<div>
				<Navigation />
				<Parallax bgImage={imgs.bg} strength={500}>
					<Artical>
						<h1>
							A Great Guy
						</h1>
						<hr />
						<img src="./imgs/stars.jpg" />
						-IGN
					</Artical>
					<Artical>
						<h1>
							What A Coder
						</h1>
						<hr />
						<img src="./imgs/stars.jpg" />
						-Professors Everywhere
					</Artical>
					<Artical>
						<h1>
							Kinda a Cuck
						</h1>
						<hr />
						<img src="./imgs/stars.jpg" />
						-My Friends
					</Artical>
					<Artical>
						<h1>
							Hey Don't Take That!
						</h1>
						<hr />
						<img src="./imgs/stars.jpg" />
						-Antique Store Clerk
					</Artical>
				</Parallax>
			</div>
		)
	}
}
