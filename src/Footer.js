import React from "react"
import LinkeDin from "./images/Linkedin.png"
import GitHub from "./images/github.png"
import resume from "./files/Pranav_Patel.pdf"

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="container-fluid">
                    <div className="col-12 col-lg-12 col-md-12 mx-auto">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12 ">
                                <div className="row justify-content-center"> {/* this is for the header row */}
                                    <h6>Want to download my resume, <a href={resume} target="_blank" rel="noopener noreferrer" download="Pranav_Patel_Resume.pdf">click here!</a></h6>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12 ">
                                <div className="row justify-content-center"> {/* this is for the header row */}
                                    <h6><a href="https://www.linkedin.com/in/pranavpatel292/" target="_blank" rel="noopener noreferrer"><img src={LinkeDin} alt="Linkedin" width="40" height="40"/></a>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="https://github.com/PranavPatel292" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="Linkedin" width="40" height="40"/></a>
                                    </h6>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12 ">
                                <div className="row justify-content-center"> {/* this is for the header row */}
                                    <p>Copyright &#169; Pranav Patel, 2020</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;