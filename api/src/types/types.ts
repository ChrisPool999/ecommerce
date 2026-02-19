import { type JwtPayload } from "jsonwebtoken"

export interface AuthUser extends JwtPayload {
  email: string
  id: number
}
