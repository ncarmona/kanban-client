import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import { APIConnection } from './interfaces/APIConnection'
import { APIs } from "./../../config"

function apiSelector(apis: APIConnection[] ,name: string): APIConnection | null {
  const { MODE: environment } = import.meta.env
  return apis.find((a: APIConnection) => a.name === name && a.environment === environment) ?? null
}

export function apiConnect (name: string, suffix: string): AxiosInstance | null {
  const apiData: APIConnection | null = apiSelector(APIs, name)
  let connection = null

  if (!!apiData) {
    let { baseURL } = apiData
    baseURL += suffix
    const connectionData: AxiosRequestConfig = { baseURL }

    connection = axios.create(connectionData)
  }

  return connection
}