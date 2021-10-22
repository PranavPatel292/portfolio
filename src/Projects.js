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
import uniLover from "./images/projetcs/univese_lover.png"
import sortAlgo from "./images/projetcs/sortingAlgo.png"

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
                    <div className="col-12 col-lg-12 col-md-12 col-sm-6 mx-auto">
                        <div className="row projects-intro"> {/* this is for the header row */}
                            <div className="col-12 col-lg-6 col-sm-12 col-md-12 mx-auto">

                                <div className="row justify-content-center">
                                    <h1>Projects</h1>
                                </div>

                                <div className="col-12 col-lg-12 col-sm-6 col-md-9">
                                    <div className="row justify-content-center">
                                        <p className="tool_text">In my view, practical learning is a crucial aspect to learn and test new skills. Following my principals and ethics, I did many projects during my graduation, post-graduation, and free time to police and fine-tune my knowledge & skills. Each new project brings an anonymous challenge(s) to carter them; each project has been thoroughly studied & researched with the focus to find intricate technical anomalies and, lastly, implemented with many experiments. Some of the projects are also hosted on the Internet to provide worldwide access.</p>
                                    </div>
                                </div>
                                <br />

                                <div className="row justify-content-around">

                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div class="card align-items-center" >

                                            <div class="card-block text-center">
                                                <h4 class="card-title">Binary Tree Visualizer</h4>
                                            </div>
                                            <img class="card-img-top" src={binaryTree} alt="Card image cap" />
                                            <div class="card-block text-center">
                                                <p class="card-text">A project to visually see how the binary tree added the new node had been created in the Vanilla JavaScript with some aid from the CSS to bring aesthetic view. A binary search algorithm is also implemented to navigate the tree with the animation(s) to track the search behaviour. Click on the <b>Live Demo</b> to see it in action.</p>
                                            </div>


                                            <div className="card-block text-center">
                                                <img src={js} alt="js" className="project_icon" />
                                                <img src={html5} alt="js" className="project_icon" />
                                                <img src={css} alt="js" className="project_icon" />
                                            </div>

                                            <div class="card-block text-center">
                                                <a href="https://pranavpatel292.github.io/binarySearchTree/" target="_blank" rel="noopener noreferrer">Live Demo</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <a href="https://github.com/PranavPatel292/binarySearchTree" target="_blank" rel="noopener noreferrer">Source</a>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div class="card align-items-center" >

                                            <div class="card-block text-center">
                                                <h4 class="card-title">AVL Tree Visualizer</h4>
                                            </div>
                                            <img class="card-img-top" src={avlTree} alt="Card image cap" />
                                            <div class="card-block text-center">
                                                <p class="card-text">Like the Binary Tree Visualization project, another project to visualize the AVL tree was also implemented with the Binary Search algorithm. Here, the tree nodes are always in the balance factor of one, and if this condition broke, then the contributing nodes will try to rearrange themselves until the balance factor is set to one. Click on the <b>Live Demo</b> to see it in action.</p>
                                            </div>

                                            <div className="card-block text-center">
                                                <img src={js} alt="js" className="project_icon" />
                                                <img src={html5} alt="js" className="project_icon" />
                                                <img src={css} alt="js" className="project_icon" />
                                            </div>

                                            <div class="card-block text-center">
                                                <a href="https://pranavpatel292.github.io/avlTree/" target="_blank" rel="noopener noreferrer">Live Demo</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <a href="https://github.com/PranavPatel292/avlTree" target="_blank" rel="noopener noreferrer">Source</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="row justify-content-around">

                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div class="card align-items-center" >

                                            <div class="card-block text-center">
                                                <h4 class="card-title">Hazardous Air Detector</h4>
                                            </div>
                                            <img class="card-img-top" src={firstProject} alt="Card image cap" />
                                            <div class="card-block text-center">
                                                <p class="card-text">The project is aimed to monitor the hazardous particles present in ambient air via a gas sensor attached to the Micro-Controller. The gas sensor reading is transferred to the NodeJS based server via IoT on which it is stored in the database. An interactive user dashboard is presented to further analysis of this data. The underlying concept of the project has also been acknowledged at the <b>IEEE</b> conference.</p>
                                            </div>


                                            <div className="card-block text-center">
                                                <img src={js} alt="js" className="project_icon" />
                                                <img src={node} alt="js" className="project_icon" />
                                                <img src={mongodb} alt="js" className="project_icon" />
                                            </div>

                                            <div class="card-block text-center">
                                                <a href="https://youtu.be/mxR_nN_2Qrw" target="_blank" rel="noopener noreferrer">Video Demo</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <a href="https://ieeexplore.ieee.org/document/8777481" target="_blank" rel="noopener noreferrer">IEEE Paper</a>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div class="card align-items-center" >

                                            <div class="card-block text-center">
                                                <h4 class="card-title">Road Work Detection</h4>
                                            </div>
                                            <img class="card-img-top" src={secondProject} alt="Card image cap" />
                                            <div class="card-block text-center">
                                                <p class="card-text">To automate the road work detection alert present on the Google Map, a proto-type project has been made to identify any ongoing road work by examining the video feed supplied to it. A CNN is used on the top of the video feed to find out the relevant road work features, further combining with the latitude and longitude information to make an alert on Google Maps.</p>
                                            </div>

                                            <div className="card-block text-center">
                                                <img src={python} alt="js" className="project_icon" />
                                            </div>

                                            <div class="card-block text-center">
                                                <a href="https://youtu.be/3TTfs7Yme6I" target="_blank" rel="noopener noreferrer">Video Demo</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <a href="https://github.com/PranavPatel292/Road_detection" target="_blank" rel="noopener noreferrer">Source</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="row justify-content-around">

                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div class="card align-items-center" >

                                            <div class="card-block text-center">
                                                <h4 class="card-title">N Queen</h4>
                                            </div>
                                            <img class="card-img-top" src={sevenProject} alt="Card image cap" />
                                            <div class="card-block text-center">
                                                <p class="card-text">Placing an N queen is such a fashion that they will not kill each other commonly known as an N queen algorithm has been created in the Vanilla JavaScript with an aid from the CSS to make it visually more appealing. An option for user / player to increase the difficulty is added with a feature that allows user to configure the board size. Click on the <b>Live Demo</b> to see it in action.</p>
                                            </div>


                                            <div className="card-block text-center">
                                                <img src={js} alt="js" className="project_icon" />
                                                <img src={css} alt="js" className="project_icon" />
                                                <img src={html5} alt="js" className="project_icon" />
                                            </div>

                                            <div class="card-block text-center">
                                                <a href="https://pranavpatel292.github.io/n-Queen/" target="_blank" rel="noopener noreferrer">Live Demo</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <a href="https://github.com/PranavPatel292/n-Queen" target="_blank" rel="noopener noreferrer">Source</a>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div class="card align-items-center" >

                                            <div class="card-block text-center">
                                                <h4 class="card-title">Cloud Storage</h4>
                                            </div>
                                            <img class="card-img-top" src={thirdProject} alt="Card image cap" />
                                            <div class="card-block text-center">
                                                <p class="card-text">To satisfy the large data storage needs, a cloud storage application is implemented and hosted on the Internet. A spare laptop is used to host the server made in the NodeJS and has a storage capacity of around one TB. Basic authentication is enforced to validate the user preventing the accidental leakage of private information. The system can also easily be scaled up to facilitate the storage needs just by installing the same server NodeJS code on the required computers. Click on the Live Demo to see it in action.</p>
                                            </div>

                                            <div className="card-block text-center">
                                                <img src={node} alt="js" className="project_icon" /><img src={mongodb} alt="js" className="project_icon" /><img src={js} alt="js" className="project_icon" />
                                            </div>

                                            <div class="card-block text-center">
                                                <a href="http://pranavp292server.hopto.org:9999/" target="_blank" rel="noopener noreferrer">Live Demo</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <a href="https://github.com/PranavPatel292/selfMadeCloud" target="_blank" rel="noopener noreferrer">Source</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div className="row justify-content-around">

                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div class="card align-items-center" >

                                            <div class="card-block text-center">
                                                <h4 class="card-title">Google Doodle Classifier</h4>
                                            </div>
                                            <img class="card-img-top" src={googleDoodle} alt="Card image cap" />
                                            <div class="card-block text-center">
                                                <p class="card-text">Powered by the self-made two-layer deep neural network that is able to perform the classification N numbers of classes from the provide dataset is used against the <a target="__blank" href="https://github.com/googlecreativelab/quickdraw-dataset" rel="noopener noreferrer">Google Doodle dataset</a> to classify the four classes. After the training and testing on the dataset, a user prompt with a drawing board to draw and based on their drawing, a trained model will try to classify the result. In almost all the instance the neural network has maintained an accuracy of around 93.00%.</p>
                                            </div>


                                            <div className="card-block text-center">
                                                <img src={python} alt="js" className="project_icon" />
                                            </div>

                                            <div class="card-block text-center">
                                                <a href="https://www.youtube.com/watch?v=rriS3dYe02g" target="_blank" rel="noopener noreferrer">Video Demo</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <a href="https://github.com/PranavPatel292/quickDraw" target="_blank" rel="noopener noreferrer">Source</a>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div class="card align-items-center" >

                                            <div class="card-block text-center">
                                                <h4 class="card-title">Intelligent Bird</h4>
                                            </div>
                                            <img class="card-img-top" src={flappyBirds} alt="Card image cap" />
                                            <div class="card-block text-center">
                                                <p class="card-text">Based on the same two hidden layers (used for the Google Doodle classifier project) of the self-made neural network but with an addition of the genetic algorithm, a popular game of Flappy Bird was re-created in Python. The main protagonist of the game has been equipped with intelligence so that it can navigate itself by looking at the upcoming obstacles.</p>
                                            </div>

                                            <div className="card-block text-center">
                                                <img src={python} alt="js" className="project_icon" />
                                            </div>

                                            <div class="card-block text-center">
                                                <a href="https://youtu.be/amIZC6PVMeg" target="_blank" rel="noopener noreferrer">Video Demo</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <a href="https://github.com/PranavPatel292/flappyBirds" target="_blank" rel="noopener noreferrer">Source</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div className="row justify-content-around">

                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div class="card align-items-center" >

                                            <div class="card-block text-center">
                                                <h4 class="card-title">Universe Lovers</h4>
                                            </div>
                                            <img class="card-img-top" src={uniLover} alt="Card image cap" />
                                            <div class="card-block text-center">
                                                <p class="card-text">Trapped by the gravitational pull of the space, two amateur space lovers and a Computer Engineers made an useful website about the space by gathering the several data from NASA and other useful space APIs with a focus on being as responsive as possible. The website currently has three components. 1) Weather at Mars' equator: Elysium Planitia 2) International Space Station (ISS) Tracker and 3) Light pollution map.</p>
                                            </div>


                                            <div className="card-block text-center">
                                                <img src={js} alt="js" className="project_icon" />
                                                <img src={css} alt="js" className="project_icon" />
                                                <img src={html5} alt="js" className="project_icon" />
                                            </div>

                                            <div class="card-block text-center">
                                                <a href="https://github.com/Yashwin12/universe-lovers" target="_blank" rel="noopener noreferrer">Source</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div class="card align-items-center" >

                                            <div class="card-block text-center">
                                                <h4 class="card-title">Sorting Algorithm Visualizer</h4>
                                            </div>
                                            <img class="card-img-top" src={sortAlgo} alt="Card image cap" />
                                            <div class="card-block text-center">
                                                <p class="card-text">Sticking to my ethics of practical learning, I have coded out a visualization (in a Vanilla JavaScript) of some most famous sorting algorithm such as Insertion sort, Quick sort, and a Bubble sort. This project also realized me the importance of the time complexity as I can visually see the different algorithm taking a different times and iteration steps to finalize the output. Click on the <b>Live Demo</b> to see it in action</p>
                                            </div>

                                            <div className="card-block text-center">
                                            <img src={js} alt="js" className="project_icon" />
                                                <img src={html5} alt="js" className="project_icon" />
                                                <img src={css} alt="js" className="project_icon" />
                                            </div>

                                            <div class="card-block text-center">
                                                <a href="https://pranavpatel292.github.io/sortingVisu/" target="_blank" rel="noopener noreferrer">Live Demo</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <a href="https://github.com/PranavPatel292/sortingVisu" target="_blank" rel="noopener noreferrer">Source</a>
                                            </div>
                                        </div>
                                    </div>

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