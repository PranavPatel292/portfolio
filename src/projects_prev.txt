import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Projects.css"

import firstProject from "./images/projetcs/projectFirst.png"
import secondProject from "./images/projetcs/projectSecond.png"
import thirdProject from "./images/projetcs/projectThird.png"
import sevenProject from "./images/projetcs/projectSeven.png"
import binaryTree from "./images/projetcs/binaryTree.png"
import avlTree from "./images/projetcs/avlTree.png"
import googleDoodle from "./images/projetcs/googleDoodle.png"
import flappyBirds from "./images/projetcs/flappyBirds.png"

import js from "./images/javascipt.png"
import python from "./images/python.png"
import node from "./images/nodejs.png"
import mongodb from "./images/mongodb.png"
import html5 from "./images/html5.png"
import css from "./images/css.png"

class Projects extends React.Component {

    render() {
        return (
            <div id="projects" className="project-intro">
                <div className="container-fluid">
                    <div className="col-12 col-lg-7 col-md-12 col-sm-6 mx-auto">
                        <div className="row projects-intro"> {/* this is for the header row */}
                            <div className="col-12 col-lg-12 col-sm-12 col-md-12 mx-auto">

                                <div className="row justify-content-center">
                                    <h1>Projects I made</h1>
                                </div>

                                <div className="col-12 col-lg-10 col-sm-6 col-md-9 mx-auto">
                                    <div className="row justify-content-center">
                                        <p className="tool_text">The following projects have been key in facilitating my growth as a web developer. Each project utilizes a combination of research, experimentation and applied techniques or concepts that are critical for developing any successful experience. Each of these projects are deployed using Heroku's basic tier so the app may need a moment to wake on initial request.</p>
                                    </div>
                                </div>

                                <br />
                                <div className="row justify-content-around">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="row justify-content-start">
                                            <div className="card cust_card">

                                                <div className="col-12 col-md-12 col-lg-12">
                                                    <div className="row justify-content-center">
                                                        <h4>Binary Tree</h4>
                                                    </div>
                                                </div>

                                                <img className="card-img-top" src={binaryTree} alt="binaryTree1" className="img_project" />
                                                <div className="card-body">
                                                    <p className="card-text cust_card_text">The project is intended to visualize the binary tree and written in vanilla JavaScript. No need to import any kind of framework just clone the repo and you are ready to go.</p>

                                                    <div className="col-12 col-md-12 col-lg-12">

                                                        <div className="row justify-content-center">
                                                            <div classNames="row">
                                                                <p>Powerd By</p>
                                                            </div>
                                                        </div>

                                                        <div className="row justify-content-center">

                                                            <div className="col-6 col-md-4 col-lg-4">
                                                                <div className="row justify-content-center">
                                                                    <img src={js} alt="js1" className="project_icon" />
                                                                </div>
                                                            </div>

                                                            <div className="col-6 col-md-4 col-lg-4">
                                                                <div className="row justify-content-center">
                                                                    <img src={css} alt="js" className="project_icon" />
                                                                </div>
                                                            </div>

                                                            <div className="col-6 col-md-4 col-lg-4">
                                                                <div className="row justify-content-center">
                                                                    <img src={html5} alt="js" className="project_icon" />
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div><br />

                                                    <div className="col-12 col-md-12 col-lg-12">
                                                        <div className="row justify-content-center">
                                                            <div className="col-6 col-md-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <a href="https://pranavpatel292.github.io/binarySearchTree/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                                                </div>
                                                            </div>

                                                            <div className="col-6 col-md-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <a href="https://github.com/PranavPatel292/binarySearchTree" target="_blank" rel="noopener noreferrer">Source</a>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="row justify-content-end">
                                            <div className="card cust_card">

                                                <div className="col-12 col-md-12 col-lg-12">
                                                    <div className="row justify-content-center">
                                                        <h4>AVL Tree</h4>
                                                    </div>
                                                </div>

                                                <img className="card-img-top" src={avlTree} alt="avlTree1" className="img_project" />
                                                <div className="card-body">



                                                    <p className="card-text cust_card_text">The project is intended to visualize the AVL tree and written in vanilla JavaScript. No need to import any kind of framework just clone the repo and you are ready to go.</p>

                                                    <div className="col-12 col-md-12 col-lg-12">

                                                        <div className="row justify-content-center">
                                                            <div classNames="row">
                                                                <p>Powerd By</p>
                                                            </div>
                                                        </div>

                                                        <div className="row justify-content-center">

                                                            <div className="col-6 col-md-4 col-lg-4">
                                                                <div className="row justify-content-center">
                                                                    <img src={js} alt="js1" className="project_icon" />
                                                                </div>
                                                            </div>

                                                            <div className="col-6 col-md-4 col-lg-4">
                                                                <div className="row justify-content-center">
                                                                    <img src={css} alt="js" className="project_icon" />
                                                                </div>
                                                            </div>

                                                            <div className="col-6 col-md-4 col-lg-4">
                                                                <div className="row justify-content-center">
                                                                    <img src={html5} alt="js" className="project_icon" />
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div><br />

                                                    <div className="col-12 col-md-12 col-lg-12">
                                                        <div className="row justify-content-center">
                                                            <div className="col-6 col-md-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <a href="https://pranavpatel292.github.io/avlTree/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                                                </div>
                                                            </div>

                                                            <div className="col-6 col-md-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <a href="https://github.com/PranavPatel292/avlTree" target="_blank" rel="noopener noreferrer">Source</a>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div className="row justify-content-around">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="row justify-content-start">
                                            <div className="card cust_card">

                                                <div className="col-12 col-md-12 col-lg-12">
                                                    <div className="row justify-content-center">
                                                        <h4>Toxic Detector</h4>
                                                    </div>
                                                </div>

                                                <img className="card-img-top" src={firstProject} alt="toxicDtector" className="img_project" />
                                                <div className="card-body">
                                                    <p className="card-text cust_card_text">A project to detect the atomoshipric air toxin is created using the Particle Photon as a microcontoller and MQ series gas sensor. The project has also published in the IEEE conference paper.</p>

                                                    <div className="col-12 col-md-12 col-lg-12">

                                                        <div className="row justify-content-center">
                                                            <div classNames="row">
                                                                <p>Powerd By</p>
                                                            </div>
                                                        </div>


                                                        <div className="row justify-content-center">

                                                            <div className="col-6 col-md-4 col-lg-4">
                                                                <div className="row justify-content-center">
                                                                    <img src={js} alt="js2" className="project_icon" />
                                                                </div>
                                                            </div>

                                                            <div className="col-6 col-md-4 col-lg-4">
                                                                <div className="row justify-content-center">
                                                                    <img src={node} alt="nodejs1" className="project_icon" />
                                                                </div>
                                                            </div>

                                                            <div className="col-6 col-md-4 col-lg-4">
                                                                <div className="row justify-content-center">
                                                                    <img src={mongodb} alt="nodejs1" className="project_icon" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div><br />

                                                    <div className="col-12 col-md-12 col-lg-12">
                                                        <div className="row justify-content-center">
                                                            <div className="col-6 col-md-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                                                </div>
                                                            </div>

                                                            <div className="col-6 col-md-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <a href="#" target="_blank" rel="noopener noreferrer">Source</a>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="row justify-content-end">
                                            <div className="card cust_card">

                                                <div className="col-12 col-md-12 col-lg-12">
                                                    <div className="row justify-content-center">
                                                        <h4>Roadwork Detector</h4>
                                                    </div>
                                                </div>

                                                <img className="card-img-top" src={secondProject} alt="road_work" className="img_project" />
                                                <div className="card-body">
                                                    <p className="card-text cust_card_text">A prototype project was developed to detect the real time road work and further implemented to make an alert(marker) on the Google map for related on going road work.</p>

                                                    <div className="col-12 col-md-12 col-lg-12">
                                                        <div className="row justify-content-center">
                                                            <div classNames="row">
                                                                <p>Powerd By</p>
                                                            </div>
                                                        </div>

                                                        <div className="row justify-content-center">

                                                            <div className="col-6 col-md-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <img src={python} alt="python2" className="project_icon" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div><br />

                                                    <div className="col-12 col-md-12 col-lg-12">
                                                        <div className="row justify-content-center">
                                                            <div className="col-6 col-md-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                                                </div>
                                                            </div>

                                                            <div className="col-6 col-md-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <a href="#" target="_blank" rel="noopener noreferrer">Source</a>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-around">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="row justify-content-start">
                                            <div className="card cust_card">

                                                <div className="col-12 col-md-12 col-lg-12">
                                                    <div className="row justify-content-center">
                                                        <h4>N Queen</h4>
                                                    </div>
                                                </div>

                                                <img className="card-img-top" src={sevenProject} alt="n_Queen" className="img_project" />
                                                <div className="card-body">
                                                    <p className="card-text cust_card_text">The project is intended to visualize the famous N queen problem and written in vanilla JavaScript. No need to import any kind of framework just clone the repo and you are ready to go.</p>

                                                    <div className="col-12 col-md-12 col-lg-12">

                                                        <div className="row justify-content-center">
                                                            <div classNames="row">
                                                                <p>Powerd By</p>
                                                            </div>
                                                        </div>


                                                        <div className="row justify-content-center">

                                                            <div className="col-6 col-md-4 col-lg-4">
                                                                <div className="row justify-content-center">
                                                                    <img src={js} alt="js5" className="project_icon" />
                                                                </div>
                                                            </div>

                                                            <div className="col-6 col-md-4 col-lg-4">
                                                                <div className="row justify-content-center">
                                                                    <img src={html5} alt="js5" className="project_icon" />
                                                                </div>
                                                            </div>

                                                            <div className="col-6 col-md-4 col-lg-4">
                                                                <div className="row justify-content-center">
                                                                    <img src={css} alt="js5" className="project_icon" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div><br />

                                                    <div className="col-12 col-md-12 col-lg-12">
                                                        <div className="row justify-content-center">
                                                            <div className="col-6 col-md-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <a href="https://pranavpatel292.github.io/n-Queen/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                                                </div>
                                                            </div>

                                                            <div className="col-6 col-md-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <a href="https://github.com/PranavPatel292/n-Queen" target="_blank" rel="noopener noreferrer">Source</a>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="row justify-content-end">
                                            <div className="card cust_card">

                                                <div className="col-12 col-md-12 col-lg-12">
                                                    <div className="row justify-content-center">
                                                        <h4>Cloud Storage</h4>
                                                    </div>
                                                </div>

                                                <img className="card-img-top" src={thirdProject} alt="cust_cloud" className="img_project" />
                                                <div className="card-body">



                                                    <p className="card-text cust_card_text">A self made could storage was design and build to store and retrive a large volume of data. A simple user authentication was also been made to prevent unauthorized access.</p>

                                                    <div className="col-12 col-md-12 col-lg-12">

                                                        <div className="row justify-content-center">
                                                            <div classNames="row">
                                                                <p>Powerd By</p>
                                                            </div>
                                                        </div>

                                                        <div className="row justify-content-center">

                                                            <div className="col-6 col-md-4 col-lg-4">
                                                                <div className="row justify-content-center">
                                                                    <img src={node} alt="nodejs89" className="project_icon" />
                                                                </div>
                                                            </div>

                                                            <div className="col-6 col-md-4 col-lg-4">
                                                                <div className="row justify-content-center">
                                                                    <img src={mongodb} alt="nodejs1" className="project_icon" />
                                                                </div>
                                                            </div>

                                                            <div className="col-6 col-md-4 col-lg-4">
                                                                <div className="row justify-content-center">
                                                                    <img src={js} alt="nodejs1" className="project_icon" />
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div><br />

                                                    <div className="col-12 col-md-12 col-lg-12">
                                                        <div className="row justify-content-center">
                                                            <div className="col-6 col-md-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <a href="http://pranavserver292.hopto.org/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                                                </div>
                                                            </div>

                                                            <div className="col-6 col-md-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <a href="#" target="_blank" rel="noopener noreferrer">Source</a>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>


                                <div className="row justify-content-around">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="row justify-content-start">
                                            <div className="card cust_card">

                                                <div className="col-12 col-md-12 col-lg-12">
                                                    <div className="row justify-content-center">
                                                        <h4>Google Doodle Classifier</h4>
                                                    </div>
                                                </div>

                                                <img className="card-img-top" src={googleDoodle} alt="googleDoodle" className="img_project" />
                                                <div className="card-body">
                                                    <p className="card-text cust_card_text">Powered by the self-made two layer deep neural network that is able to perform the classification of four classes (not limited to but due to the computatatin limitation) of the Google's Quick Draw dataset.</p>

                                                    <div className="col-12 col-md-12 col-lg-12">

                                                        <div className="row justify-content-center">
                                                            <div classNames="row">
                                                                <p>Powerd By</p>
                                                            </div>
                                                        </div>


                                                        <div className="row justify-content-center">

                                                            <div className="col-6 col-md-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <img src={python} alt="js5" className="project_icon" />
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div><br />

                                                    <div className="col-12 col-md-12 col-lg-12">
                                                        <div className="row justify-content-center">
                                                            <div className="col-6 col-md-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <a href="https://www.youtube.com/watch?v=rriS3dYe02g" target="_blank" rel="noopener noreferrer">Video Demo</a>
                                                                </div>
                                                            </div>

                                                            <div className="col-6 col-md-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <a href="https://github.com/PranavPatel292/quickDraw" target="_blank" rel="noopener noreferrer">Source</a>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="row justify-content-end">
                                            <div className="card cust_card">

                                                <div className="col-12 col-md-12 col-lg-12">
                                                    <div className="row justify-content-center">
                                                        <h4>Intelligent Bird</h4>
                                                    </div>
                                                </div>

                                                <img className="card-img-top" src={flappyBirds} alt="cust_cloud" className="img_project" />
                                                <div className="card-body">



                                                    <p className="card-text cust_card_text">Based on the same two hidden layer self-made neural network but with an addidtion of the genetic algorithrm, a popluar game of Flappy Bird was re-created in the Python. The main protagonist of the game has been equipped with an intelligence so that it can navagite it self by looking at the up coming obstracals.</p>

                                                    <div className="col-12 col-md-12 col-lg-12">

                                                        <div className="row justify-content-center">
                                                            <div classNames="row">
                                                                <p>Powerd By</p>
                                                            </div>
                                                        </div>

                                                        <div className="row justify-content-center">

                                                            <div className="col-6 col-md-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <img src={python} alt="nodejs89" className="project_icon" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div><br />

                                                    <div className="col-12 col-md-12 col-lg-12">
                                                        <div className="row justify-content-center">
                                                            <div className="col-6 col-md-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <a href="#" target="_blank" rel="noopener noreferrer">Live Video</a>
                                                                </div>
                                                            </div>

                                                            <div className="col-6 col-md-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <a href="https://github.com/PranavPatel292/flappyBirds" target="_blank" rel="noopener noreferrer">Source</a>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                    </div>
                                    <br /><br /><br />

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;