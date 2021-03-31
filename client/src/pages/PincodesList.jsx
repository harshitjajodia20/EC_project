import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';

const Wrapper = styled.div`
    padding: 0 70px 70px 70px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdatePincode extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/pincodes/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}><UpdateIcon />Update</Update>
    }
}

class DeletePincode extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the pincode ${this.props.id} permanently?`,
            )
        ) {
            api.deletePincodeById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}><DeleteIcon />Delete</Delete>
    }
}

class PincodesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pincodes: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllPincodes().then(pincodes => {
            this.setState({
                pincodes: pincodes.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { pincodes, isLoading } = this.state

        const columns = [
            // {
            //     Header: 'ID',
            //     accessor: '_id',
            //     filterable: true,
            // },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
                Filter: ({filter, onChange}) => {
                    return (
                          <div style={{position: 'relative'}}>
                           
                            <SearchIcon />
                         
                          <input
                            onChange={event => onChange(event.target.value)}
                            value={filter ? filter.value : ''}
                            style={{
                              width: '100%',
                              backgroundColor: '#F0F8FF',
                              color: '#222222',
                            }}
                          />
                         
                        </div>
                    )
                        }
            },
            {
                Header: 'Price',
                accessor: 'price',
                filterable: true,
                Filter: ({filter, onChange}) => {
                    return (
                          <div style={{position: 'relative'}}>
                           
                            <SearchIcon />
                         
                          <input
                            onChange={event => onChange(event.target.value)}
                            value={filter ? filter.value : ''}
                            style={{
                              width: '100%',
                              backgroundColor: '#F0F8FF',
                              color: '#222222',
                            }}
                          />
                         
                        </div>
                    )
                        }
            },
            {
                Header: 'Quantity',
                accessor: 'quantity',
                filterable: false,
               // Cell: props => <span>{props.value.join(' / ')}</span>,
            },
            {
                Header: 'Phone',
                accessor: 'phone',
                filterable: true,
                Filter: ({filter, onChange}) => {
                    return (
                          <div style={{position: 'relative'}}>
                           
                            <SearchIcon />
                         
                          <input
                            onChange={event => onChange(event.target.value)}
                            value={filter ? filter.value : ''}
                            style={{
                              width: '100%',
                              backgroundColor: '#F0F8FF',
                              color: '#222222',
                            }}
                          />
                         
                        </div>
                    )
                        }
               // Cell: props => <span>{props.value.join(' / ')}</span>,
            },
            {
                Header: 'Delete',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeletePincode id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: 'Update',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdatePincode id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!pincodes.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={pincodes}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default PincodesList
