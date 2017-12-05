import React from 'react'
import Navigation from './Navigation'
import Artical from './Artical'
import { Parallax } from 'react-parallax'

const imgs = { "bridge": "https://i.imgur.com/QK4b7Sx.jpg" }

export default class Contact extends React.Component {
    render() {
        return (
            <Parallax bgImage={imgs.bridge} strength={-400}>
                <Navigation />
                <Artical>
                    <h1>
                        Contact Me On Social Media
                    </h1>
                    <hr />
                    <center>
                        <a href="https://m.me/ryan.guild.96">
                            <img src="./imgs/messenger.png" height="70px" />
                        </a>
                        <a href="https://twitter.com/angryman489?lang=en">
                            <img src="./imgs/Twitter.png" height="100px" />
                        </a>
                        <a href="https://www.instagram.com/angrylittleman489/">
                            <img src="./imgs/instagram.png" height="100px" />
                        </a>
                        <img src="./imgs/snapcodes.svg" height="100px" width="100px" />
                    </center>
                </Artical>
                <Artical>
                    <h1>
                        Contact Me By Email
                    </h1>
                    <hr />
                    <center>
                        <form action="mailto:ryanguild489@gmail.com" method="get" enctype="text/plain">
                            <p>Name: <input type="text" name="name" /></p>
                            <p>Email: <input type="text" name="email" /></p>
                            <p>Comments:<br />
                                <textarea cols="30" rows="20" name="comments"></textarea></p>
                            <p><input type="submit" name="submit" value="Send" />
                                <input type="reset" name="reset" value="Clear Form" /></p>
                        </form>
                    </center>
                </Artical>
            </Parallax>
        )
    }
}
