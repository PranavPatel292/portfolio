import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./AboutMe.css"
import js from "./images/javascipt.png"
import python from "./images/python.png"
import c from "./images/c.png"
import node from "./images/nodejs.png"
import react_image from "./images/react-native.png"
import mongo from "./images/mongodb.png"
import html5 from "./images/html5.png"
import gitHub from "./images/github.png"
import css from "./images/css.png"
import c_s from "./images/c_s.png"
import c_p from "./images/c_p.png"

class AboutMe extends React.Component {

    render() {
        return (
            <div id="aboutMe">
                <div className="container-fluid">
                    <div className="col-12 col-lg-12 col-md-12 mx-auto">
                        <div className="row justify-content-center coloum section_style"> {/*first row for the col-12*/}
                            {/* <div className="col-12 col-lg-12 col-md-12 mx-auto">
                                <div className="row justify-content-center">
                                    <h1 className="">About Me</h1>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-6 col-lg-5">
                                        <div className="row justify-content-center">
                                            <p className="about_text">Although the following set of tools are my goto for front-end and back-end developement, I'm always experimenting and challenging myself to try emerging tools and technologies to ensure that I can create engaging and most importantly, <i>delightful </i> experiences for the end user!</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                        <div className="row justify-content-center coloum"> {/*second row for the col-12*/}
                            <div className="col-12 col-lg-12 col-md-12 mx-auto">
                                <div className="row justify-content-center">
                                    <h1>Tools I used</h1>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-6 col-lg-5">
                                        <div className="row justify-content-center">
                                            <p className="tool_text">Although the following set of tools are my goto for front-end and back-end developement, I'm always experimenting and challenging myself to try emerging tools and technologies to ensure that I can create engaging and most importantly, <strong><i>delightful</i></strong> experiences for the end user!</p>
                                        </div>

                                        <br /> <br />
                                        <div className="row justify-content-center">
                                            <div className="col-4  col-md-6 col-lg-3">

                                                <div className="row justify-content-center">
                                                    <h6 className="">Javascipt</h6>
                                                </div>


                                                <div className="row justify-content-center">
                                                    <img src={js} alt="javascipt" className="icon" />
                                                </div>

                                            </div>

                                            <div className="col-4 col-md-6 col-lg-3">

                                                <div className="row justify-content-center">
                                                    <h6 className="">Python</h6>
                                                </div>

                                                <div className="row justify-content-center">
                                                    <img src={python} alt="javascipt" className="icon" />
                                                </div>

                                            </div>

                                            <div className="col-4 col-md-6 col-lg-3">

                                                <div className="row justify-content-center">
                                                    <h6 className="">NodeJS</h6>
                                                </div>

                                                <div className="row justify-content-center">
                                                    <img src={node} alt="javascipt" className="icon" />
                                                </div>

                                            </div>

                                        </div> <br />

                                        <div className="row justify-content-center">
                                            <div className="col-4 col-md-6 col-lg-3">

                                                <div className="row justify-content-center">
                                                    <h6 className="">C</h6>
                                                </div>

                                                <div className="row justify-content-center">
                                                    <img src={c} alt="javascipt" className="icon" />
                                                </div>

                                            </div>

                                            <div className="col-4 col-md-6 col-lg-3">

                                                <div className="row justify-content-center">
                                                    <h6 className="">React</h6>
                                                </div>

                                                <div className="row justify-content-center">
                                                    <img src={react_image} alt="javascipt78" className="icon" />
                                                </div>

                                            </div>

                                            <div className="col-4 col-md-6 col-lg-3">

                                                <div className="row justify-content-center">
                                                    <h6 className="">MongoDB</h6>
                                                </div>

                                                <div className="row justify-content-center">
                                                    <img src={mongo} alt="javascipt90" className="icon" />
                                                </div>

                                            </div>
                                        </div><br />

                                        <div className="row justify-content-center">
                                            <div className="col-4 col-md-6 col-lg-3">

                                                <div className="row justify-content-center">
                                                    <h6 className="">GitHub</h6>
                                                </div>

                                                <div className="row justify-content-center">
                                                    <img src={gitHub} alt="javascipt" className="icon" />
                                                </div>
                                            </div>

                                            <div className="col-4 col-md-6 col-lg-3">
                                                <div className="row justify-content-center">
                                                    <h6 className="">HTML5</h6>
                                                </div>

                                                <div className="row justify-content-center">
                                                    <img src={html5} alt="javasciptui" className="icon" />
                                                </div>

                                            </div>

                                            <div className="col-4 col-md-6 col-lg-3">

                                                <div className="row justify-content-center">
                                                    <h6 className="">CSS</h6>
                                                </div>

                                                <div className="row justify-content-center">
                                                    <img src={css} alt="javascipthj" className="icon" />
                                                </div>

                                            </div>
                                        </div><br />

                                        <div className="row justify-content-center">
                                            <div className="col-6 col-md-6 col-lg-3">
                                                <div className="row justify-content-center">
                                                    <h6 className="">C#</h6>
                                                </div>

                                                <div className="row justify-content-center">
                                                    <img src={c_s} alt="javasciptgh" className="icon" />
                                                </div>

                                            </div>

                                            <div className="col-6 col-md-6 col-lg-3">
                                                <div className="row justify-content-center">
                                                    <h6 className="">C++</h6>
                                                </div>

                                                <div className="row justify-content-center">
                                                    <img src={c_p} alt="javasciptjkv" className="icon" />
                                                </div>

                                            </div>
                                        </div><br />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row justify-content-center coloum"> {/*second row for the col-12*/}
                            <div className="col-12 col-lg-12 col-md-12 mx-auto">
                                <div className="row justify-content-center">
                                    <footer className="icon_credit">All icon(s) credit: <a href="https://iconscout.com" target="_blank" rel="noopener noreferrer">https://iconscout.com</a></footer>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;