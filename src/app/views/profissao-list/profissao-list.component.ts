import { Component, OnInit } from '@angular/core';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { Profissao } from 'src/app/shared/model/profissao.model';
import { ProfissionaisService } from 'src/app/shared/service/profissionais.service';

@Component({
  selector: 'app-profissao-list',
  templateUrl: './profissao-list.component.html',
  styleUrls: ['./profissao-list.component.css'],

})
export class ProfissaoListComponent implements OnInit {

  profissoes: Profissao[] = [];
  profissao = new Profissao;

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
    
  }


  loadProfissoes(event: LazyLoadEvent) {

    setTimeout(() => {
      
      this.getProfissao();

    }, 1000);

    this.page = Number(event.first) / 10;

  }

  openNew() {
    this.profissao = { ... new Profissao }
    this.submitted = false;
    this.productDialog = true;
  }
  editProfissao(profissao: Profissao) {
    this.profissao = { ...profissao };
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProfissao() {
    this.submitted = true;

    if (this.profissao.nome.trim()) {
      if (this.profissao.id) {
        //put
        this.service.putProfissao(this.profissao).subscribe(result => { });
        
        setTimeout(() => {this.getProfissao();}, 1000);
      }
      else {
        this.service.postProfissao(this.profissao).subscribe(result => { });
        setTimeout(() => {this.getProfissao();}, 1000);
      }

      this.profissoes = [...this.profissoes];
      this.productDialog = false;
      this.profissao = new Profissao;
    }
  }

  deleteProfissao(profissao: Profissao) {

  }

  getProfissao() {
    this.service.getProfissaoPageable(this.page + "", this.size + "").subscribe(data => {
      this.profissoes = data.content;
      this.totalRecords = data.totalElements;
      this.loading = false;

    });
  }

}
