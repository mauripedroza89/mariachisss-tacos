import {_api} from './api'

export const prodCreateWS = (data) => _api.post('/products/create',data)

export const prodDeleteWS = (id) =>_api.delete(`/products/delete/${id}`)

export const prodUpdateWS = (id,data) =>_api.patch(`/products/update/${id}`,data)

export const prodListEndpoint = () =>_api.get(`/products/all`)

