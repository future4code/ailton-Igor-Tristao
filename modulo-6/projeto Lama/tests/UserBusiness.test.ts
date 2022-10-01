import { UserBusiness } from "../src/business/UserBusiness";
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User";
import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { HashManagerMock } from "./mocks/HashManagerMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { UserDatabaseMock } from "./mocks/UserDatabaseMock";

describe("Testando a UserBusiness", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new HashManagerMock(),
    new AuthenticatorMock()
  );

  test("Um token é retornado quando o cadastro é bem-sucedido", async () => {
    const input: ISignupInputDTO = {
      email: "fulano@gmail.com",
      name: "Fulano",
      password: "fulano123",
    };

    const response = await userBusiness.signup(input);
    expect(response.message).toBe("Usuário cadastrado com sucesso");
    expect(response.token).toBe("token-mock-normal");
  });

  test("Um token é retornado quando o login é bem-sucedido", async () => {
    const input: ILoginInputDTO = {
      email: "astrodev@gmail.com",
      password: "bananinha",
    };

    const response = await userBusiness.login(input);
    expect(response.message).toBe("Login realizado com sucesso");
    expect(response.token).toBe("token-mock-admin");
  });

  // Erros do signUp
  test("Um erro é retornado quando o name é menor que 3 caracteres", async () => {
    expect.assertions(2);

    try {
      const input: ISignupInputDTO = {
        email: "fulano@gmail.com",
        name: "Fu",
        password: "123456",
      };

      await userBusiness.signup(input);
    } catch (error: any) {
      expect(error.statusCode).toBe(422);
      expect(error.message).toBe(
        "Parâmetro 'name' precisa ter no mínimo 3 caracteres."
      );
    }
  });

  test("Um erro é retornado quando o password é menor que 6 caracteres", async () => {
    expect.assertions(2);

    try {
      const input: ISignupInputDTO = {
        email: "fulano@gmail.com",
        name: "Fulano",
        password: "1234",
      };

      await userBusiness.signup(input);
    } catch (error: any) {
      expect(error.statusCode).toBe(422);
      expect(error.message).toBe(
        "Parâmetro 'password' precisa ter no mínimo 6 caracteres."
      );
    }
  });

  test("Um erro é retornado quando o email tem um formato invalido", async () => {
    expect.assertions(2);

    try {
      const input: ISignupInputDTO = {
        email: "fulanogmail.com",
        name: "Fulano",
        password: "123456",
      };

      await userBusiness.signup(input);
    } catch (error: any) {
      expect(error.statusCode).toBe(422);
      expect(error.message).toBe("Parâmetro 'email' inválido");
    }
  });

  test("Um erro é retornado quando o email já existir no cadastro", async () => {
    expect.assertions(2);

    try {
      const input: ISignupInputDTO = {
        email: "usermock@gmail.com",
        name: "Fulano",
        password: "123456"
      };

      await userBusiness.signup(input);
    } catch (error: any) {
      expect(error.statusCode).toBe(409);
      expect(error.message).toBe("Email já existe.");
    }
  });

  // Erros do login

  test("Um erro é retornado quando tentar realizar login com email com formato invalido", async () => {
    expect.assertions(2);

    try {
      const input: ILoginInputDTO = {
        email: "fulanogmail.com",
        password: "123456"
      };

      await userBusiness.login(input);
    } catch (error: any) {
      expect(error.statusCode).toBe(422);
      expect(error.message).toBe("Parâmetro 'email' inválido");
    }
  });

  test("Um erro é retornado quando o password é menor que 6 caracteres", async () => {
    expect.assertions(2);

    try {
      const input: ILoginInputDTO = {
        email: "fulano@gmail.com",
        password: "1234",
      };

      await userBusiness.login(input);
    } catch (error: any) {
      expect(error.statusCode).toBe(422);
      expect(error.message).toBe(
        "Parâmetro 'password' precisa ter no mínimo 6 caracteres."
      );
    }
  });

  test("Um erro é retornado quando o email não existir no cadastro", async () => {
    expect.assertions(2);

    try {
      const input: ILoginInputDTO = {
        email: "fulano@gmail.com",
        password: "123456"
      };

      await userBusiness.login(input);
    } catch (error: any) {
      expect(error.statusCode).toBe(401);
      expect(error.message).toBe("Email não cadastrado.");
    }
  });

  test("Um erro é retornado quando o password for incorreto", async () => {
    expect.assertions(2);

    try {
      const input: ILoginInputDTO = {
        email: "astrodev@gmail.com",
        password: "bananinha2"
      };

      await userBusiness.login(input);
    } catch (error: any) {
      expect(error.statusCode).toBe(401);
      expect(error.message).toBe("Password incorrect");
    }
  });
});
