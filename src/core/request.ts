import { AxiosInstance } from 'axios'
import { apiConnect } from "./APIConnector"

export abstract class Request {
  protected readonly connection: AxiosInstance
  protected readonly routeSuffix: string

  constructor(name: string, route: string) {
    this.routeSuffix = route
    
    if (!!apiConnect(name, this.routeSuffix)) this.connection = apiConnect(name, this.routeSuffix)!
    else throw new Error("Can not find API entry.");
  }
}