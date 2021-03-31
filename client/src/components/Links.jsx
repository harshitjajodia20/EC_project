import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Firing Gun
                </Link>
                <Collapse>
                    <List>
                        <Item>
                        <Button variant="outlined" color="inherit" style={{maxWidth: '200px', maxHeight: '50px', minWidth: '60px', minHeight: '30px'}}>
                            <Link to="/pincodes/list" className="nav-link" style={{color: "black"}}>
                                List Items
                            </Link>
                            </Button>    
                        </Item>
                        <Item>
                        <Button variant="outlined" color="inherit" style={{maxWidth: '200px', maxHeight: '50px', minWidth: '60px', minHeight: '30px'}}>
                            <Link to="/pincodes/create" className="nav-link" style={{color: "black"}}>
                                Add Items
                            </Link>
                        </Button>    
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links
