import React from 'react';

class Services extends React.Component {
  render(){
    return(
      <div id="services" className="pad-section">
        <div className="container">
          <h2 className="text-center">Our Services</h2> <hr />
          <div className="row text-center">
            <div className="col-sm-3 col-xs-6">
              <i className="glyphicon glyphicon-cloud"> </i>
              <h4>Service 1</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in sem cras amet. Donec in sem cras amet.</p>
            </div>
            <div className="col-sm-3 col-xs-6">
              <i className="glyphicon glyphicon-leaf"> </i>
              <h4>Service 2</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in sem cras amet. Donec in sem cras amet.</p>
            </div>
            <div className="col-sm-3 col-xs-6">
              <i className="glyphicon glyphicon-phone-alt"> </i>
              <h4>Service 3</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in sem cras amet. Donec in sem cras amet.</p>
            </div>
            <div className="col-sm-3 col-xs-6">
              <i className="glyphicon glyphicon-bullhorn"> </i>
              <h4>Service 4</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in sem cras amet. Donec in sem cras amet.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Services