import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Estado } from 'src/app/shared/model/estado.model';
import { Profissao } from 'src/app/shared/model/profissao.model';
import { Profissional } from 'src/app/shared/model/profissional.model';
import { Telefone } from 'src/app/shared/model/telefone.model';
import { ProfissionaisService } from 'src/app/shared/service/profissionais.service';


@Component({
  selector: 'app-profissional-list',
  templateUrl: './profissional-list.component.html',
  styleUrls: ['./profissional-list.component.css']
})
export class ProfissionalListComponent implements OnInit {

  profissionais: Profissional[] = [];

  profissional: Profissional = new Profissional;

  selectedEstado!: Estado;

  estados: Estado[] = [];

  telefone: Telefone = new Telefone;

  page: number = 0;
  size: number = 0;
  totalRecords: number = 0;
  loading: boolean = false;
  productDialog: boolean = false;
  submitted: boolean = false;


  constructor(
    public service: ProfissionaisService
  ) { }

  ngOnInit(): void {
    this.carregarEstados();

  }



  loadProfinais(event: LazyLoadEvent) {
    setTimeout(() => { this.getProfissionais(); }, 1000);
    this.page = Number(event.first) / 10;
  }

  openNew() {
    this.profissional = { ... new Profissional }
    this.submitted = false;
    this.productDialog = true;
  }
  editProfissional(profissional: Profissional) {
    this.profissional = { ...profissional };
    this.telefone = this.profissional.telefone[0];
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProfissional() {
    this.submitted = true;

    if (this.profissional.nome.trim()) {
      if (this.profissional.id) {
        //put - fazer no spring boot
        this.profissional.telefone.push(this.telefone)
        this.service.putProfissao(this.profissional).subscribe(result => { });

        setTimeout(() => { this.getProfissionais(); }, 1000);
      }
      else {
        this.profissional.telefone = [this.telefone];
        this.service.postProfissional(this.profissional).subscribe(result => { });
        setTimeout(() => { this.getProfissionais(); }, 1000);
      }

      this.profissionais = [...this.profissionais];
      this.productDialog = false;
      this.profissional = new Profissional;
    }
  }

  deleteProfissional(profissional: Profissional) {

  }

  getProfissionais() {
    this.service.getProfissionalPageable(this.page + "", this.size + "").subscribe(data => {
      this.profissionais = data.content;
      this.totalRecords = data.totalElements;
      this.loading = false;

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
}
