import { APIConnection } from "./src/core/interfaces/APIConnection"
import { Environments } from "./src/core/environments"

export const APIs: APIConnection[] = [
  {
    name: "kanban-api",
    environment: Environments.DEVELOPMENT,
    baseURL: "https://localhost:5000"
  }
]