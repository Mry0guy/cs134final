import React from 'react';
import Navigation from './Navigation'
import Artical from './Artical'
import { Parallax } from 'react-parallax'

const imgs = {
	florence: "https://i.imgur.com/UQgnOKH.jpg"
}

export default class Resume extends React.Component {
	render() {
		return (
			<Parallax bgImage={imgs.florence} strength={500}>
				<Navigation />
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
		)
	}
}
