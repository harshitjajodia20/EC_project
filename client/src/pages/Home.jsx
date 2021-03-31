import React, { Component } from 'react';

class Home extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
     
    }

    return (
      <header id="home">


      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">We are Firing Gun.</h1>
            <h3>We are a team from  <span>IIT Bhilai</span>, 
            who are here to represent DSC of IIT Bhilai<span>in google solution challenge</span>. I am part of various clubs including
            <span> DSC bhilai</span>.</h3>
            <hr />
            <ul className="social">
               hello world
            </ul>
         </div>
      </div>
   </header>
    );
  }
}

export default Home;
