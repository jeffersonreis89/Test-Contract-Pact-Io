# Test-Contract-Pact-Io

Este repositório contém os testes de contrato utilizando a biblioteca Pact.io. Pact é uma ferramenta para teste de contrato entre consumidores e provedores de APIs, garantindo que ambos sigam os requisitos definidos, facilitando a integração entre sistemas.

## Objetivo do Projeto

Este projeto visa validar as interações entre o Consumidor (que faz requisições) e o Provedor (que responde às requisições) de acordo com um contrato previamente acordado. Os testes de contrato são essenciais para garantir que qualquer alteração no código do provedor não quebre a integração com os consumidores, e vice-versa.

## Estrutura do Projeto

- `tests/contract`: Contém os testes de contrato, onde o consumidor define o que espera do provedor.
- `pact.test.js`: Arquivo que define o mock do provedor para os testes.
- `package.json`: Contém as dependências e scripts para executar os testes.

## Como Rodar o Projeto

### Pré-requisitos

Antes de começar, você precisa ter o Node.js e o npm instalados em sua máquina.

- **Node.js**: [Clique aqui para instalar o Node.js](https://nodejs.org/)
- **npm**: O npm vem com a instalação do Node.js, então, ao instalar o Node.js, o npm será instalado automaticamente.

### Instalação das Dependências

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

### Acesse a pasta do projeto:

```bash

cd nome-do-repositorio
```

### Instale as dependências utilizando o npm:

```bash

npm install
```

## Como Executar os Testes de Contrato

### Para rodar os testes de contrato localmente, utilize o Jest:

```bash

npx jest tests/contract/consumer.test.js
```
O comando irá rodar os testes definidos no arquivo consumer.test.js, que verifica as interações entre o consumidor e o provedor.

## Como Rodar no GitHub Actions
Este projeto está configurado para rodar automaticamente no GitHub Actions sempre que houver um **push** ou **pull** request para a branch principal.

Workflow do GitHub Actions
O fluxo de CI/CD está configurado no arquivo `.github/workflows/pact-test.yml`. Quando um **push** ou **pull** request ocorre, o GitHub Actions executa os testes de contrato. 

Esse workflow vai garantir que os testes sejam executados automaticamente sempre que houver alterações no código. Se algum contrato não for validado corretamente, o build do GitHub Actions falhará, informando o erro.

## Explicação do Código

1. `consumer.test.js`:

* Define um teste de contrato onde o consumidor especifica o comportamento esperado do provedor.
* Usa o Pact para simular o provedor e validar as respostas.
* Verifica se as interações, como chamadas HTTP, estão conformes ao contrato.

2. `pact.test.js`:

* Configura o mock do provedor que será utilizado durante o teste.
* Define o comportamento do provedor, como o estado da API e a resposta esperada.

3. **Jest**:

* Framework de testes utilizado para executar e validar os testes de contrato. Jest é utilizado para rodar o `consumer.test.js` e verificar se os contratos estão sendo respeitados.