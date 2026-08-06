# 🏦 Bytebank

Exercício de **Programação Orientada a Objetos (POO)** em JavaScript, simulando um sistema bancário simples com clientes, contas correntes, depósitos, saques e transferências.

## 📁 Estrutura do projeto

```
bytebank/
├── Cliente.js         # Classe Cliente
├── ContaCorrente.js   # Classe ContaCorrente
└── index.js           # Ponto de entrada — instancia clientes e contas
```

## 🧩 Estrutura das classes

**`Cliente`** (`Cliente.js`)
- `nome`
- `cpf`

**`ContaCorrente`** (`ContaCorrente.js`)
- `agencia`
- `cliente` — referência a um objeto `Cliente`
- `_saldo` — saldo da conta (convenção de campo "privado")
- `depositar(valor)` — adiciona o valor ao saldo (valores inválidos são rejeitados com aviso no console)
- `sacar(valor)` — retira o valor do saldo se houver saldo suficiente, retornando o valor sacado
- `transferir(valor, conta)` — saca o valor da conta atual e deposita em outra `ContaCorrente`

**`index.js`**
- Importa as classes via **ES Modules** (`import`/`export`)
- Cria duas contas correntes (Marcelo e Diana), cada uma associada a um `Cliente`
- Realiza depósitos e exibe o resultado no console

## 🎯 Objetivo

Praticar conceitos de POO em JavaScript — classes, encapsulamento, composição de objetos e módulos ES (`import`/`export`) — simulando operações bancárias reais, incluindo transferência entre contas.

## 🛠️ Tecnologias

- **JavaScript** (POO + ES Modules)

## 🚀 Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/Juniklx/bytebank.git
   ```
2. Como o projeto usa `import`/`export` (ES Modules), rode com o Node.js indicando o tipo de módulo:
   ```bash
   node --input-type=module index.js
   ```
   Ou crie um `package.json` com `"type": "module"` na raiz do projeto e rode normalmente:
   ```bash
   node index.js
   ```

## 📌 Status

Projeto de estudo, com foco em fundamentos de Programação Orientada a Objetos e modularização em JavaScript.
