import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Links from './Links'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Container = styled.div.attrs({
    className: 'container',
})`
    height: 150px;
`

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20 px;
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
