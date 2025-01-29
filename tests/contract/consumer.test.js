const { Matchers } = require("@pact-foundation/pact");
const provider = require("./pact.test"); // Nome corrigido
const axios = require("axios");

describe("Pact with Backend", () => {
  beforeAll(() => provider.setup());
  afterAll(() => provider.finalize());

  test("Deve validar a resposta do endpoint /users", async () => {
    await provider.addInteraction({
      state: "usuários existem",
      uponReceiving: "uma requisição para listar usuários",
      withRequest: {
        method: "GET",
        path: "/users",
      },
      willRespondWith: {
        status: 200,
        body: Matchers.eachLike({
          id: Matchers.integer(1),                // id é um número inteiro
          name: Matchers.string("Jefferson Reis"),      // nome é uma string
          age: Matchers.integer(30),              // idade é um número inteiro
          phone: Matchers.string("11-9999-7890"), // telefone é uma string
          email: Matchers.string("jeffersonreissa@gmail.com"), // email é uma string
          cpf: Matchers.string("123.456.789-00")  // CPF é uma string (pode usar regex)
        }), 
        headers: { "Content-Type": "application/json" },
      },
    });

    const response = await axios.get("http://localhost:1234/users");

    expect(response.status).toBe(200);
    expect(response.data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: expect.any(Number), name: expect.any(String) }),
      ])
    );

    await provider.verify();
  });
});
