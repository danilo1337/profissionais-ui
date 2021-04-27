import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.popularMenu();
  }

  
  popularMenu(){
    this.items = [
      {
        label:'Home',
        icon: 'pi pi-fw pi-home',
        routerLink:['/']
      },
      {
          icon: 'pi pi-fw pi-plus',
          label: 'Cadastros',
          items: [
              {label: 'Profissionais', routerLink:['/profissionais']},
              {label: 'Profissão',routerLink:['/profissoes']}
          ]
      },
      {
          label: 'Relatórios',
          icon: 'pi pi-fw pi-list',
          items: [
              {label: 'Profissionais', icon: 'pi pi-fw pi-user',routerLink:['/profissional']},
              {label: 'Profissão', icon: 'pi pi-fw pi-briefcase',url: 'http://www.primefaces.org/primeng'}
          ]
      }
  ]; 

  }

}
