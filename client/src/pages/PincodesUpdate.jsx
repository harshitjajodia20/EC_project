import React, { Component } from 'react'
import api from '../api'

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

class PincodesUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
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

    handleUpdatePincode = async () => {
        const { id, name, price, quantity } = this.state
        const payload = { name, price, quantity }

        await api.updatePincodeById(id, payload).then(res => {
            window.alert(`Pincode updated successfully`)
            this.setState({
                name: '',
                price: '',
                quantity: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const pincode = await api.getPincodeById(id)

        this.setState({
            name: pincode.data.data.name,
            price: pincode.data.data.price,
            quantity: pincode.data.data.quantity,
        })
    }

    render() {
        const { name, price, quantity } = this.state
        return (
            <Wrapper>
                <Title>Update Item</Title>

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

                <Button onClick={this.handleUpdatePincode}>Update Item</Button>
                <CancelButton href={'/movies/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default PincodesUpdate
