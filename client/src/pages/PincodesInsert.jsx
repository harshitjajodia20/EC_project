import React, { Component } from 'react'
import api from '../api'

//time -> quantity rating->price

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
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



    handleIncludePincode = async () => {
        const { name, price, quantity } = this.state
        const payload = { name, price, quantity }

        await api.insertPincode(payload).then(res => {
            window.alert(`Pincode inserted successfully`)
            this.setState({
                name: '',
                price: '',
                quantity: '',
            })
        })
    }

    render() {
        const { name, price, quantity } = this.state
        return (
            <Wrapper>
                <Title>Add Items</Title>

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

                <Button onClick={this.handleIncludePincode}>Add Item</Button>
                <CancelButton href={'/pincodes/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default PincodesInsert
