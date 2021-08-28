import {_api} from './api'

export const extraCreateWS = (data) => _api.post('/extras/create',data)

export const extraDeleteWS = (id) =>_api.delete(`/extras/delete/${id}`)

export const extraUpdateWS = (id,data) =>_api.patch(`/extras/update/${id}`,data)

export const extraListEndpoint = () =>_api.get(`/extras/all`)

