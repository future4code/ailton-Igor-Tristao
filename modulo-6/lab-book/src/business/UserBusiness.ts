import { ConflictError } from './../errors/ConflictError';
import { UserDatabase } from "../database/UserDatabase"
import { UnprocessableError } from "../errors/UnprocessableError"
import { ISignupInputDTO, ITokenPayload, User, USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    async userCreator (input: ISignupInputDTO) {
        
        const { name, email, password }: ISignupInputDTO = input

        // Verificações do input

        if(!name || !email || !password) {
            throw new UnprocessableError()
        }

        if(typeof name !== 'string' || name.length < 3) {
            throw new UnprocessableError("Parâmetro 'name' invalido.")
        }

        if(typeof email !== 'string') {
            throw new UnprocessableError("Parâmetro 'email' inválido.")
        }

        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("Parâmetro 'email' inválido")
        }

        if(typeof password !== 'string' || password.length < 6) {
            throw new UnprocessableError("Parâmetro 'password' invalido.")
        }

        // Verificações na data base
        const emailExist = await this.userDatabase.getUserByEmail(email)

        if(emailExist.length > 0) {
            throw new ConflictError('Email já existe.')
        }

        // Criar as informações do usuário
        const id = this.idGenerator.generate()

        const hashPassword = await this.hashManager.hash(password)

        const user = new User (
            id,
            name,
            email,
            hashPassword,
            USER_ROLES.NORMAL
        )

        await this.userDatabase.insertUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response = {
            message: 'Cadastro realizado com sucesso',
            token
        }

        return response
    }

}