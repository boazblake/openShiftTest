import React from 'react';

import ReactDOM from 'react-dom';
import jQuery from 'jquery'


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  componentDidMount(){
    console.log('mounting!!!')
  }

  unMount(){
    console.log("unmounting!")
    React.unmountComponentAtNode(document.getElementById('container'));
  }

  render(){
    return (
      <div className="container">
          <a className="button" onClick={this.unMount} href="/auth/logout" method="get">logout</a>
      </div>
    )
  }
}