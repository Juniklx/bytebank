# 🏦 Bytebank

Exercício de **Programação Orientada a Objetos (POO)** em JavaScript, simulando um sistema bancário simples com clientes, contas (corrente e poupança), depósitos, saques e transferências.

## 📁 Estrutura do projeto

```
bytebank/
├── Cliente.js         # Classe Cliente
├── Conta.js            # Classe base Conta (encapsula saldo, saque, depósito, transferência)
├── ContaCorrente.js    # Subclasse de Conta — taxa de saque de 10%
├── ContaPoupanca.js     # Subclasse de Conta — taxa de saque de 5%
└── index.js            # Ponto de entrada — instancia clientes e contas
```

## 🧩 Estrutura das classes

**`Cliente`** (`Cliente.js`)

- `#nome`, `#cpf` — campos privados, definidos no construtor
- `nome`, `cpf` — getters de leitura para os campos privados

**`Conta`** (`Conta.js`) — classe base, não é instanciada diretamente

- `#agencia`, `#cliente`, `#saldo`, `#taxaSaque` — campos privados, definidos no construtor
- `cliente` — getter/setter; o setter valida se o valor recebido é uma instância de `Cliente`
- `agencia`, `saldo`, `taxaSaque` — getters de leitura
- `tipoConta` — getter que retorna `"conta"`; sobrescrito pelas subclasses para identificar o tipo nas mensagens de log
- `depositar(valor)` — adiciona o valor ao saldo (valores inválidos são rejeitados com aviso no console)
- `sacar(valor)` — retira o valor do saldo (aplicando a `taxaSaque` da conta) se houver saldo suficiente, retornando o valor sacado (senão avisa no console)
- `transferir(valor, conta)` — saca o valor da conta atual e deposita em outra conta, avisando no console sobre a transferência ou sobre saldo insuficiente
- `formatarMoeda(valor)` — método estático que formata um número como moeda brasileira (`R$`, padrão `pt-BR`)

**`ContaCorrente`** (`ContaCorrente.js`) — herda de `Conta`

- Define `taxaSaque` como `10%`, passada ao construtor da classe base via `super()`
- `#numeroDeContas` — campo estático privado que conta quantas contas correntes foram criadas
- Sobrescreve `tipoConta` para `"conta corrente"`

**`ContaPoupanca`** (`ContaPoupanca.js`) — herda de `Conta`

- Define `taxaSaque` como `5%`, passada ao construtor da classe base via `super()`
- Sobrescreve `tipoConta` para `"conta poupança"`

**`index.js`**

- Importa as classes via **ES Modules** (`import`/`export`)
- Cria uma conta corrente e uma conta poupança para o mesmo cliente (Marcelo)
- Realiza depósitos e saques nas duas contas (cada uma aplicando sua própria taxa)
- Exibe no console os saldos finais formatados em reais

## 🎯 Objetivo

Praticar conceitos de POO em JavaScript — classes, herança (`extends`/`super`), encapsulamento com campos e métodos privados/estáticos, polimorfismo (sobrescrita de getters entre subclasses), composição de objetos e módulos ES (`import`/`export`) — simulando operações bancárias reais com diferentes tipos de conta, taxas de saque, transferência entre contas e formatação de valores monetários.

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
