import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estado } from 'src/app/shared/model/estado.model';

import { TelefonePK } from 'src/app/shared/model/pk/telefonepk.model.pk';
import { Profissional } from 'src/app/shared/model/profissional.model';
import { Telefone } from 'src/app/shared/model/telefone.model';
import { ProfissionaisService } from 'src/app/shared/service/profissionais.service';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css']
})
export class ProfissionalComponent implements OnInit {

  profissional: Profissional = new Profissional;
  public projectForm!: FormGroup;


  estados: Estado[] = [];
  selectedEstado!: Estado;
  telefone: Telefone = new Telefone;

  constructor(
    public profissionalService: ProfissionaisService,
    public fb: FormBuilder

  ) { }

  ngOnInit(): void {
    this.carregarEstados();

    this.projectForm = this.fb.group({
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      logradouro: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      ddd: ['', [Validators.required]],
      numeroTelefone: ['', [Validators.required]]
    });

  }
  carregarEstados() {
    this.estados = [
      { nome: 'Acre' },
      { nome: 'Alagoas' },
      { nome: 'Amapa' },
      { nome: 'Amazonas' },
      { nome: 'Bahia' },
      { nome: 'Distrito Federal' },
      { nome: 'Espirito Santo' },
      { nome: 'Goias' },
      { nome: 'Maranhão' },
      { nome: 'Mato Grosso' },
      { nome: 'Mato Grosso do Sul' },
      { nome: 'Minas Gerais' },
      { nome: 'Pará' },
      { nome: 'Paraiba' },
      { nome: 'Paraná' },
      { nome: 'Pernambuco' },
      { nome: 'Piaui' },
      { nome: 'Rio de Janeiro' },
      { nome: 'Rio Grande de Norte' },
      { nome: 'Rio Grande do Sul' },
      { nome: 'Rondonia' },
      { nome: 'Roraima' },
      { nome: 'Santa Cataria' },
      { nome: 'São Paulo' },
      { nome: 'Sergipe' },
      { nome: 'Tocantins' }
    ];
    this.selectedEstado = this.estados[0];
  }
  handleClick() {
    this.adicionarAtributos();
    this.profissionalService.postProfissional(this.profissional).subscribe(result => { });
    //this.projectForm.reset();
    
  }

  adicionarAtributos() {
    this.profissional.nome = this.projectForm.controls.nome.value;
    this.profissional.sobrenome = this.projectForm.controls.sobrenome.value;
    this.profissional.cpf = this.projectForm.controls.cpf.value;
    this.profissional.endereco.logradouro = this.projectForm.controls.logradouro.value;
    this.profissional.endereco.numero = this.projectForm.controls.numero.value;
    this.profissional.endereco.cidade = this.projectForm.controls.cidade.value;
    this.profissional.endereco.estado = this.selectedEstado.nome;
    
    this.telefone.id = new TelefonePK;

    this.telefone.id.ddd = this.projectForm.controls.ddd.value;
    this.telefone.id.numero =  this.projectForm.controls.numeroTelefone.value;

    this.profissional.telefone = new Array(this.telefone);
  }

}
