import { Request } from '../core/request'
import { IAuth } from 'domain/interfaces/IAuth'

export class AuthRequests extends Request {
  constructor() {
    super("kanban-api", "/auth")
  }
  signup(credentials: IAuth):Promise<any> {
    return this.connection!.post("/signup", credentials)
  }
  signin(credentials: IAuth): Promise<any> {
    return this.connection!.post("/signin", credentials)
  }
}