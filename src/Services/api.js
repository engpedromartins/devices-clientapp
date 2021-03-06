import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getDeviceApiList = async () =>
  api.get(`/devices`)

export const createDeviceApi = async (payload) =>
  api.post(`/devices`, payload)

export const getDeviceApi = async (id) =>
  api.get(`/devices/${id}`)

export const editDeviceApi = async (device, id) => {
  return await api.put(`/devices/${id}`, device)

}

export const deleteDeviceApi = async (device) =>
  api.delete(`/devices/${device.id}`)


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getDeviceApiList,
  createDeviceApi,
  getDeviceApi,
  editDeviceApi,
  deleteDeviceApi
}