# 🏦 Bytebank

Exercício de **Programação Orientada a Objetos (POO)** em JavaScript, simulando um sistema bancário simples com clientes, funcionários, contas (corrente, poupança e salário), depósitos, saques, transferências e autenticação.

## 📁 Estrutura do projeto

```
bytebank/
├── Cliente.js                    # Classe Cliente
├── SistemaAutenticacao.js        # Login via duck typing (qualquer objeto "autenticável")
├── index.js                      # Ponto de entrada
├── Conta/
│   ├── Conta.js                  # Classe base abstrata (encapsula saldo, saque, depósito, transferência)
│   ├── ContaCorrente.js          # Subclasse de Conta — taxa de saque de 10%
│   ├── ContaPoupanca.js          # Subclasse de Conta — taxa de saque de 2%
│   └── ContaSalario.js           # Subclasse de Conta — sem taxa de saque
└── Funcionarios/
    ├── Funcionarios.js           # Classe base Funcionario
    ├── Gerente.js                # Subclasse de Funcionario — bonificação 1.1x
    └── Diretor.js                # Subclasse de Funcionario — bonificação 2x
```

## 🧩 Estrutura das classes

**`Cliente`** (`Cliente.js`)

- `#nome`, `#cpf`, `#senha` — campos privados, definidos no construtor
- `nome`, `cpf` — getters de leitura para os campos privados
- `autenticar(senha)` — compara a senha recebida com a senha cadastrada

**`Conta`** (`Conta/Conta.js`) — classe base abstrata, não pode ser instanciada diretamente (o construtor lança erro se `this.constructor === Conta`)

- `#agencia`, `#cliente`, `#saldo` — campos privados, definidos no construtor
- `cliente` — getter/setter; o setter valida se o valor recebido é uma instância de `Cliente`
- `agencia`, `saldo` — getters de leitura (`saldo` não tem setter público — só é alterado internamente por `sacar`/`depositar`, para não permitir que código externo sobrescreva o saldo sem passar pelas regras de negócio)
- `tipoConta` — getter que retorna `"conta"`; sobrescrito pelas subclasses para identificar o tipo nas mensagens de log
- `sacar(valor, taxaSaque = 0)` — retira o valor do saldo aplicando a taxa recebida (cada subclasse chama `super.sacar()` passando sua própria taxa), retornando o valor sacado em caso de sucesso ou `undefined` caso contrário
- `depositar(valor)` — adiciona o valor ao saldo (valores inválidos são rejeitados com aviso no console)
- `transferir(valor, conta)` — saca o valor da conta atual (considerando a taxa da subclasse) e só deposita na conta de destino se o saque realmente aconteceu
- `formatarMoeda(valor)` — método estático que formata um número como moeda brasileira (`R$`, padrão `pt-BR`)

**`ContaCorrente`** (`Conta/ContaCorrente.js`) — herda de `Conta`

- Taxa de saque de **10%**
- `#numeroDeContas` — campo estático privado, incrementado no construtor; exposto via `ContaCorrente.numeroDeContas`
- Sobrescreve `tipoConta` para `"conta corrente"`

**`ContaPoupanca`** (`Conta/ContaPoupanca.js`) — herda de `Conta`

- Taxa de saque de **2%**
- Sobrescreve `tipoConta` para `"conta poupança"`

**`ContaSalario`** (`Conta/ContaSalario.js`) — herda de `Conta`

- Sem taxa de saque (0%)
- Sobrescreve `tipoConta` para `"conta salário"`

**`Funcionario`** (`Funcionarios/Funcionarios.js`)

- `#nome`, `#salario`, `#cpf`, `#bonificacao`, `#senha` — campos privados
- `nome`, `cpf`, `bonificacao` — getters de leitura
- `bonificacao` — setter, valida se o valor é um número não-negativo
- `cadastrarSenha(senha)` / `autenticar(senha)` — cadastro e verificação de senha

**`Gerente`** e **`Diretor`** (`Funcionarios/Gerente.js`, `Funcionarios/Diretor.js`) — herdam de `Funcionario`, definindo `bonificacao` como `1.1` e `2`, respectivamente

**`SistemaAutenticacao`** (`SistemaAutenticacao.js`)

- `login(autenticavel, senha)` — autentica qualquer objeto que tenha um método `autenticar` (duck typing), não apenas `Cliente` ou `Funcionario`
- `ehAutenticavel(autenticavel)` — verifica se o objeto possui o método `autenticar`

**`index.js`**

- Importa as classes via **ES Modules** (`import`/`export`)
- Cria um diretor, uma gerente e um cliente, cada um com sua própria senha
- Testa o login dos três através de `SistemaAutenticacao.login`

## 🎯 Objetivo

Praticar conceitos de POO em JavaScript — classes, herança (`extends`/`super`), encapsulamento com campos e métodos privados/estáticos, polimorfismo (sobrescrita de getters e métodos entre subclasses), duck typing, composição de objetos e módulos ES (`import`/`export`) — simulando operações bancárias reais com diferentes tipos de conta e funcionário, taxas de saque, transferência entre contas, autenticação e formatação de valores monetários.

## 🛠️ Tecnologias

- **JavaScript** (POO + ES Modules)

## 🚀 Como executar

O projeto já tem um `package.json` com `"type": "module"`, então basta rodar:

```bash
node index.js
```

## 📌 Sobre

Projeto de estudo, com foco em fundamentos de Programação Orientada a Objetos e modularização em JavaScript.
