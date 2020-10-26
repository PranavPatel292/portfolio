import React from 'react';
import Typical from 'react-typical'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./heading.css"

class Header extends React.Component {

  render() {
    return (
      <div id="heading">
        <div className="container-fluid">
          <div className="col-12 col-lg-12 col-md-12 mx-auto">
            <div className="row"> {/* this is for the header row */}
              <div className="col-12 col-lg-12 col-md-12">
                <div className="row intro align-items-center">
                  <div className="col-12 col-lg-12 col-md-12">
                    <div className="row justify-content-center">
                      <h1 className="cust_h1 fixed-sticky justify-content-center">Hi, I'm Pranav!</h1>
                    </div>
                    <div className="row justify-content-center">
                      <section className="cust_h3">
                        <Typical
                          steps={['I am a', 2500, "I am a computer engineer with a passion to build an unique & useful applications. I loved to take a new ventures to bring wowness to the application. Initiate the scroll to explore my expertise.", 10000]}
                          loop={1}
                          wrapper="p"
                        /></section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
