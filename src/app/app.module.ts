import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';
import {ToolbarModule} from 'primeng/toolbar';
import { HomeComponent } from './views/home/home.component';
import {ButtonModule} from 'primeng/button';
import { ProfissaoListComponent } from './views/profissao-list/profissao-list.component';
import { HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import { ProfissionalComponent } from './views/profissional/profissional.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {DropdownModule} from 'primeng/dropdown';
import { ProfissionalListComponent } from './views/profissional-list/profissional-list.component';
import {DialogModule} from 'primeng/dialog';
import {MenubarModule} from 'primeng/menubar';
import { MenuComponent } from './views/menu/menu.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfissaoListComponent,
    ProfissionalComponent,
    ProfissionalListComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MenubarModule,
    AccordionModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    TabViewModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    DropdownModule,
    DialogModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
