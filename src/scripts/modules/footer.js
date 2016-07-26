import React from 'react';

class Footer extends React.Component {


  render(){
    let Boaz = "<BoazBlake/>"

    return(
      <footer id="footer">
        <hr />
        <div className="container">
        <p className="text-right" >Copyright &copy; <a href="https://boazblake.github.io/portfolio">{Boaz}</a>2016</p>
        </div>
      </footer>
    )
  }
}


export default Footer