const path = require("path");
const { Pact } = require("@pact-foundation/pact");

const provider = new Pact({
  consumer: "Frontend",
  provider: "Backend",
  port: 1234,
  log: path.resolve(__dirname, "logs", "pact.log"),
  dir: path.resolve(__dirname, "pacts"),
  logLevel: "info",
});

describe("Pact Provider Setup", () => {
  test("Configuração do Pact", () => {
    expect(true).toBe(true);
  });
});

module.exports = provider;
