import React, { Component } from 'react'
import api from '../api'
import Button from '@material-ui/core/Button';

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})`
padding-left:180px;
`

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    textAlign: center;
    padding-left: 500px;
    padding-right:50px;
    width:1200px;
    display: 'flex';
    justify:'center';
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

// const Button = styled.button.attrs({
//     className: `btn btn-primary`,
// })`
//     margin: 15px 15px 15px 5px;
// `

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
    paddingLeft:100px;
`

class PincodesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: '',
            quantity: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputPrice = async event => {
        const price = event.target.validity.valid
            ? event.target.value
            : this.state.price

        this.setState({ price })
    }

    handleChangeInputQuantity = async event => {
        const quantity = event.target.value
        this.setState({ quantity })
    }
    handleChangeInputPhone = async event => {
        const phone = event.target.value
        this.setState({ phone })
    }



    handleIncludePincode = async () => {
        const { name, price, quantity,phone } = this.state
        const payload = { name, price, quantity,phone }

        await api.insertPincode(payload).then(res => {
            window.alert(`Pincode inserted successfully`)
            this.setState({
                name: '',
                price: '',
                quantity: '',
                phone:'',
            })
        })
    }

    render() {
        const { name, price, quantity,phone } = this.state
        return (
            <Wrapper>
                <Title >Add Items</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Price: </Label>
                <InputText
                    type="number"
                    value={price}
                    onChange={this.handleChangeInputPrice}
                />

                <Label>Quantity: </Label>
                <InputText
                    type="number"
                    value={quantity}
                    onChange={this.handleChangeInputQuantity}
                />
                 <Label>Phone Number: </Label>
                <InputText
                    type="number"
                    value={phone}
                    onChange={this.handleChangeInputPhone}
                />

                <Button variant="contained" color="primary" style={{maxWidth: '100px', maxHeight: '50px', minWidth: '30px', minHeight: '30px'}} onClick={this.props.handleLogout} onClick={this.handleIncludePincode} >Add Item</Button>
                <CancelButton href={'/pincodes/list'} variant="contained" color="primary" style={{maxWidth: '100px', maxHeight: '50px', minWidth: '30px', minHeight: '30px'}}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default PincodesInsert
