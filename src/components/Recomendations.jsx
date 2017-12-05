import React from 'react'
import Artical from './Artical'
import Navigation from './Navigation'
import {Parallax} from 'react-parallax'

const imgs = {
    bg: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Code-1076536.jpg"}

export default class Recomendations extends React.Component {
    render() {
        return (
            <Parallax bgImage={imgs.bg} strenght={-500}>
                <Navigation/>
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
                        <a href="https://www.reddit.com/r/combinedgifs/">
                        A great subreddit
                        </a>
						<img className="block" src="./imgs/magneto.gif" />
                    </center>
                </Artical>
            </Parallax>

        )
    }
}
