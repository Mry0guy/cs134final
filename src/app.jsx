import React from 'react';
import Navigation from './components/Navigation';
import 'normalize.css';
import 'styles/index.scss';
import { Parallax } from 'react-parallax'
import Artical from './components/Artical'

var imgs = {
	"mnt": "https://i.imgur.com/BaGd4BM.jpg",
	"pgh": "https://i.imgur.com/OABRHpF.jpg",
	florence: "https://i.imgur.com/UQgnOKH.jpg",
	bg: "https://i.imgur.com/XnpyoDH.jpg"
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
						<img src="./imgs/cathy.jpg" className="inlineIMG"/>
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
						<img className="block" src="https://i.imgur.com/NCTHQVm.gifv" />
					</center>
				</Artical>
				<Parallax bgImage={imgs.florence} strength={500}>
				<Artical>
					<h1>
						Work and Volunteer Experience
					</h1>
					Sep 2012 - Present
					<h3>
						Northampton High School Theater Tech Director
					</h3>
					Northampton, MA
					Grades 10, 11, 12 (planned)
					I have run The Theater Tech Department since my sophomore year as a paid employee.  In this position, I donated a substantial number of hours of sound support to non-profit organizations.
					<br />
					Sep 2012 - April 2016
					<h3>
						Ski Instructor
					</h3>
					Berkshire East Ski Resort, Charlemont, MA Grades 9, 10, 11, 12 (planned) Taught group and private lessons with a wide rage of ages and abilities. I was a trainee for 2 years before I started as a paid employee,
				</Artical>
				<Artical>
					<h1>
						Education
					</h1>
					Sep 2012 - April 2016
					<h3>
						Northampton High School, Northampton MA
					</h3>
					Current Grade: 11, Graduation 2016
					I am thankful to attend this school known for its rigorous academics and strong support for the arts
				</Artical>
				<Artical>
					<h1>
						Athleric Achivement
					</h1>
					Sep 2012 - April 2016
					<h3>
						Ski Team
					</h3>
					Grades 9,10,11,12
					Active member of the varsity team since freshman year, numbered racer for Individual Competition 2015
				</Artical>
				<Artical>
					<h1>
						Extracurricular Activities
					</h1>
					Sep 2012 - April 2016
					<h3>
						Northampton High School Theater Tech
					</h3>
					Grades 9,10,11,12
					<table>
						<tr>
							<td>
								<b>Date</b>
							</td>
							<td>
								<b>Show</b>
							</td>
							<td>
								<b>Role</b>
							</td>
							<td>
								<b>Description</b>
							</td>
						</tr>
						<tr>
							<td>
								Mar-15'
							</td>
							<td>
								Godspell
							</td>
							<td>
								Sound Director
							</td>
							<td>
								55 person professional wireless system to complement our bold production of the controversial Godspell.
							</td>
						</tr>
						<tr>
							<td>
								Nov-14'
							</td>
							<td>
								The Skin Of Our Teeth
							</td>
							<td>
								Sound and Video Director
							</td>
							<td>
								Advanced sound and light show with multi-display video and ambiance to complement this avant-garde production about the many ends of the world.
							</td>
						</tr>
						<tr>
							<td>
								Apr-13'
							</td>
							<td>
								Sound Operator
							</td>
							<td>
								A rock concert with over ten bands mixed and miked
							</td>
						</tr>
						<tr>
							<td>
								May-14
							</td>
							<td>
								House of Blue Leaves
							</td>
							<td>
								cast-"Ronnie"
							</td>
							<td>
								I was cast in this mental health, black comedy as the pope murdering, psycho child Ronnie.
							</td>
						</tr>
						<tr>
							<td>
								Mar-14'
							</td>
							<td>
								Music Man
							</td>
							<td>
								Sound Operator
							</td>
							<td>
								The department musical with many advanced instrument miking techniques.
							</td>
						</tr>
						<tr>
							<td>
								Sep-13'
							</td>
							<td>
								Rosencrantz and Guildenstern are Dead
							</td>
							<td>
								Stage Manager
							</td>
							<td>
								A massive production, including elements of set build, sound, light, dramaturgy and management.
							</td>
						</tr>
						<tr>
							<td>
								Sep-13'
							</td>
							<td>
								Deathtrap
							</td>
							<td>
								Recording Director
							</td>
							<td>
								Recording techniques and editing.
							</td>
						</tr>
						<tr>
							<td>
								Jun-13'
							</td>
							<td>
								High Tide
							</td>
							<td>
								Sound Designer and Operator
							</td>
							<td>
								A complex project in positional sound cues and ambiance.
							</td>
						</tr>
						<tr>
							<td>
								Jun-14'
							</td>
							<td>
								Double Take Fringe Festival performance   of High Tide
							</td>
							<td>
								Tech Director / Stage Manager
							</td>
							<td>
								A Greenfield, MA city wide festival where the performance were staged in unusual locations.
							</td>
						</tr>
						<tr>
							<td>
								May-13'
							</td>
							<td>
								Alice in Wonderland
							</td>
							<td>
								Playback Design and Operator
							</td>
							<td>
								A complex artistic take on the classic novel done with live music improv.
							</td>
						</tr>
						<tr>
							<td>
								Mar-13'
							</td>
							<td>
								Annie
							</td>
							<td>
								Sound Operator
							</td>
							<td>
								A large cast simple sound-scape musical
							</td>
						</tr>
					</table>
				</Artical>
			</Parallax>
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
