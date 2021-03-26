import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
})

export const insertPincode = payload => api.post(`/pincode`, payload)
export const getAllPincodes = () => api.get(`/pincodes`)
export const updatePincodeById = (id, payload) => api.put(`/pincode/${id}`, payload)
export const deletePincodeById = id => api.delete(`/pincode/${id}`)
export const getPincodeById = id => api.get(`/pincode/${id}`)

const apis = {
    insertPincode,
    getAllPincodes,
    updatePincodeById,
    deletePincodeById,
    getPincodeById,
}

export default apis
