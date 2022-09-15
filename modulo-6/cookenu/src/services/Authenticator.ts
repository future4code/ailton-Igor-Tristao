import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { typeUser } from '../types'

dotenv.config();

export interface AuthenticationData {
  id: string;
  role: typeUser;
}

class Authenticator {
  generateToken(input: AuthenticationData) {
    const token = jwt.sign(input, process.env.JWT_KEY as string, {
      expiresIn: process.env.EXPIRES_IN,
    });

    return token;
  }

  verifyToken(token: string): AuthenticationData {
    const verify = jwt.verify(token, process.env.JWT_KEY as string) as any;

    return verify as AuthenticationData
  }
}

export default Authenticator;
