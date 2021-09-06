import {_api} from './api'

export const orderCreateWS = (data) => _api.post('/order/create',data)

export const orderDeleteWS = (id) =>_api.delete(`/order/delete/${id}`)

export const orderUpdateWS = (id,data) =>_api.patch(`/order/update/${id}`,data)

export const orderListEndpoint = () =>_api.get(`/order/all`)

