import {_api} from './api'

export const drinkCreateWS = (data) => _api.post('/drinks/create',data)

export const drinkDeleteWS = (id) =>_api.delete(`/drinks/delete/${id}`)

export const drinkUpdateWS = (id,data) =>_api.patch(`/drinks/update/${id}`,data)

export const drinkListEndpoint = () =>_api.get(`/drinks/all`)

