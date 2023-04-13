import axios from 'axios'
import { SnackData } from '../interfaces/SnackData'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getBurgers = () => api.get<SnackData[]>('/burgers')
export const getCombo = () => api.get<SnackData[]>('/combo')
export const getVegetarian = () => api.get<SnackData[]>('/vegetarian')
export const getDrinks = () => api.get<SnackData[]>('/drinks')
export const getDeserts = () => api.get<SnackData[]>('/deserts')

export default api
