import React from 'react';
import Navigation from './components/Navigation';
import 'normalize.css';
import 'styles/index.scss';
import { Parallax } from 'react-parallax'
import Artical from './components/Artical'

var imgs = {
	"mnt": "https://i.imgur.com/BaGd4BM.jpg",
	"pgh": "https://i.imgur.com/OABRHpF.jpg"
}

export default class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<Navigation />
				<Parallax className="homeIMG" bgImage={imgs.mnt} strength={-500} bgHeight="auto" bgWidth="110%;">

					<Artical>
						<h1>
							Hi I'm Ryan Guild
						</h1>
						<hr />
						I am a Computer science student at the University of Pittsburgh. I am Intersested in studying machine learning and data science. I hope that I can better the world through the use of ML to understand the vast gradients of our world.
					</Artical>
					<Artical>
						<h1>
							I am a World Traveler
						</h1>
						<hr />
						I have been lucky enough to have visited over 20 countries and 5 of the 6 inhabited continents. I lived in Thialand for 6 months in my 7th grade year and began my knack for bumbeling my way through foriegn tounges. I would like to work outside of the US in the developing world to bring first world services to the growing consumer classes around the world.
						<img src="./imgs/travel.jpg" className="inlineIMG" />
					</Artical>
				</Parallax>
				<Artical>
					<h1>
						Machine Learning is the Future
						</h1>
					<hr />
					I have only recently begun to use Tensorflow and keras to explore the wold of machine learning. With a strong base of understanding of the core concepts of persistant matrix oporations and backpropogation I have begun to write my own models. The moment I see a chance to take a class on machine learning I will be all over it but for now I will keep writing crummy java sorting methods because the Pitt cs school is really with the times.
						<img src="./imgs/network.jpg" className="inlineIMG" />
				</Artical>
				<Parallax bgImage={imgs.pgh} strength={500} bgHeight="auto" bgWidth="110%" >
					<Artical>
						<h1>
							My Home is in Beautiful Rainy Pittsburgh
						</h1>
						<hr />
						Pittsburgh is a center for the ML comunity with a lively art and literary scene. I count myself lucky to be one of the few college students I know who is not on a campus off in the middle of knowhere. I have many options for cusine and entertainment along with all the other perks of metropolitan living.
						<img src="./imgs/cathy.jpg" className="inlineIMG" />
					</Artical>
				</Parallax>
				<Artical>
					<h1>
						Recomendations
					</h1>
					<hr />
					<center>
						<h3>
							Siraj Raval:
						</h3>
						A machine learning youtuber with great intro courses
						<iframe className="block" width="427" height="240" src="https://www.youtube.com/embed/vOppzHpvTiQ" frameBorder="0" gesture="media" allow="encrypted-media" ></iframe>
						<hr />
						<h3>
							Zen and The Art of Motorcycle Matinence:
						</h3>
						Every young person should read this bizzar philosophical narrative
						<a className="block" href="https://en.wikipedia.org/wiki/Zen_and_the_Art_of_Motorcycle_Maintenance">
							<img src="./imgs/Zen.jpg" />
						</a>
						<hr />
						<h3>
							The Life Aquatic with Steve Zissou
						</h3>
						Bill Murry is life Bill Murry is love.
						<iframe className="block" width="427" height="240" src="https://www.youtube.com/embed/yh401Rmkq0o" frameBorder="0" gesture="media" allow="encrypted-media" ></iframe>
						<hr />
						<h3>
							/r/CombinedGifs
						</h3>
						A great subreddit
						<img className="block" src="./imgs/magneto.gif" />
					</center>
				</Artical>
			</div>
		)
	}
}
