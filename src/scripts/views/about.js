import React from 'react';

class About extends React.Component {
  render(){
    return(
      <div id="about" className="pad-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <img src="images/joshLogo.svg" alt="" />
            </div>
            <div className="col-sm-6 text-center">
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in sem cras amet.</h2>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum metus et ligula venenatis, at rhoncus nisi molestie. Pellentesque porttitor elit suscipit massa laoreet metus.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About