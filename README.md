# 🏦 Bytebank

Exercício de **Programação Orientada a Objetos (POO)** em JavaScript, simulando um sistema bancário simples com clientes e contas correntes.

## 📁 Conteúdo

| Arquivo | Descrição |
|---|---|
| [`index.js`](./index.js) | Classes `Cliente` e `ContaCorrente`, com operações de depósito e saque |

## 🧩 Estrutura das classes

**`Cliente`**
- `nome`
- `cpf`
- `rg`

**`ContaCorrente`**
- `agencia`
- `saldo`
- `depositar(valor)` — adiciona o valor ao saldo (ignora valores menores ou iguais a zero)
- `sacar(valor)` — retira o valor do saldo se houver saldo suficiente, retornando o valor sacado (ou `0` caso não seja possível)

## 🎯 Objetivo

Praticar os conceitos de classes, atributos, métodos e instanciação de objetos em JavaScript, simulando operações básicas de um banco.

## 🛠️ Tecnologias

- **JavaScript** (POO)

## 🚀 Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/Juniklx/bytebank.git
   ```
2. Execute com o Node.js:
   ```bash
   node index.js
   ```

## 📌 Status

Projeto de estudo, com foco em fundamentos de Programação Orientada a Objetos em JavaScript.
