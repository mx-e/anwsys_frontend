import axios from 'axios'

export const server = axios.create({
  baseURL: 'http://192.168.3.109:8080/',
  timeout: 1000
})