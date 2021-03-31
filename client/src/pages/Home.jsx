import React, { Component } from 'react';
import Card from "./Card";
import Grid from '@material-ui/core/Grid';
class Home extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
     
    }

    return (
      <header id="home">


      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Solution Challenge 2021</h1>
            <h3>We are a team of 3 students representing <span>Developer Student Club(DSC), Indian Institute of Technology Bhilai</span> in the<br></br> <span>Google solution challenge, 2021</span></h3>
            <hr />
            <Grid
                 container
                 spacing={0}
                 direction="column"
                 alignItems="center"
                 justify="center"
                 style={{ minHeight: '20vh' }}
                 
            >

             <Grid item xs={3}>
              <Card>
                // card content
                </Card>
            </Grid>      
            </Grid>       
         </div>
      </div>
   </header>
    );
  }
}

export default Home;
