import { Environments } from 'core/environments';

export interface APIConnection {
  name: string,
  baseURL: string,
  environment: Environments
}