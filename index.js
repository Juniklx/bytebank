import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor("Marcelo", 10000, "123.456.789-00");
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Diana", 5000, "987.654.321-00");
gerente.cadastrarSenha("123")

const cliente = new Cliente("Junior", "456.789.123-00", "12345")

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "12345");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");

console.log(clienteEstaLogado, gerenteEstaLogado, diretorEstaLogado);