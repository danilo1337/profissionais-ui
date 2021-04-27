import { Profissao } from "./profissao.model";

export class Formacao{
    id:bigint | undefined;
    data:string = '';
    nomeInstituicao:string = '';
    profissao:Profissao = new Profissao;
}