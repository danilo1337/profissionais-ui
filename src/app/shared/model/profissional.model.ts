import { Endereco } from "./endereco.model";
import { Formacao } from "./formacao.model";
import { Telefone } from "./telefone.model";

export class Profissional{
    id:bigint | undefined;
    nome: string = '';
    sobrenome: string = '';
    cpf:string = '';
    endereco:Endereco = new Endereco;
    telefone: Telefone[] = [];
    formacao:Formacao[] = [];
}