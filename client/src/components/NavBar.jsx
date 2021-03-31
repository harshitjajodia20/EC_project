

import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Links from './Links'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Container = styled.div.attrs({
    className: '',
})`

display: flex;
justify-content: space-between;
align-items: center;
height: 80px;
// margin: 0 50px ;
// padding: 0 50px;
// max-width: 1500px;
width: 100%;
margin-bottom:100px;


// @media (max-width:400px){
//     padding: 0 10px;
// }
// @media (max-width:991px) {
//     padding: 0 30px;
// }

// @media (min-width: 1500px) {
//     max-width: 1500px;
// }

// @media (min-width: 1800px) {
//     max-width: 1800px;
//     padding: 0 30px;
// }`

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg',
})`

font-size: 18px;
position: 'sticky';
top: 0;
z-index: 999;
height: 80px;
/* box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5); */
display: flex;
justify-content: center;
align-items: center;

width:100%;
background:#e4fbff;
    margin-bottom: 0 em;
    padding:0 em;
`


class NavBar extends Component {
    
    render() {
        return (

            <Container>
                <Nav>
                    <Logo />
                    <Links />
                    <Button variant="contained" color="secondary" style={{maxWidth: '100px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} onClick={this.props.handleLogout}>Logout</Button>
                </Nav>
            </Container>
        )
    }
}

export default NavBar
