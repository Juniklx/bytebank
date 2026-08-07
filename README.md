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
- `#nome`, `#cpf` — campos privados, definidos no construtor
- `nome`, `cpf` — getters de leitura para os campos privados

**`ContaCorrente`** (`ContaCorrente.js`)
- `#agencia` — campo privado, definido no construtor
- `#cliente` — campo privado; referência a um objeto `Cliente`, com getter (`cliente`) e setter que valida se o valor recebido é uma instância de `Cliente`
- `#saldo` — campo privado com getter (`saldo`); inicia em `0`
- `#numeroDeContas` — campo estático privado que conta quantas contas foram criadas, exposto pelo getter estático `numeroDeContas`
- `depositar(valor)` — adiciona o valor ao saldo (valores inválidos são rejeitados com aviso no console)
- `sacar(valor)` — retira o valor do saldo se houver saldo suficiente, retornando o valor sacado (senão avisa no console)
- `transferir(valor, conta)` — saca o valor da conta atual e deposita em outra `ContaCorrente`, avisando no console sobre a transferência ou sobre saldo insuficiente
- `formatarMoeda(valor)` — método estático que formata um número como moeda brasileira (`R$`, padrão `pt-BR`)

**`index.js`**
- Importa as classes via **ES Modules** (`import`/`export`)
- Cria duas contas correntes (Marcelo e Diana), cada uma associada a um `Cliente`
- Realiza depósitos nas duas contas
- Transfere um valor da conta de Diana para a de Marcelo
- Exibe no console os saldos finais formatados em reais e o número total de contas criadas

## 🎯 Objetivo

Praticar conceitos de POO em JavaScript — classes, encapsulamento com campos e métodos privados/estáticos, composição de objetos e módulos ES (`import`/`export`) — simulando operações bancárias reais, incluindo transferência entre contas e formatação de valores monetários.

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

## 📌 Sobre

Projeto de estudo, com foco em fundamentos de Programação Orientada a Objetos e modularização em JavaScript.
