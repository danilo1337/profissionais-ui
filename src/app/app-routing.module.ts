import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProfissaoListComponent } from './views/profissao-list/profissao-list.component';
import { ProfissionalListComponent } from './views/profissional-list/profissional-list.component';
import { ProfissionalComponent } from './views/profissional/profissional.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'profissional',
    component: ProfissionalComponent
  },
  { 
    path:'profissionais',
    component: ProfissionalListComponent
  },
  { path:'profissoes',
    component: ProfissaoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
