import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovaTransferencia } from './nova-transferencia/nt';
import { AlunoComponentComponent } from './aluno/aluno-component/aluno-component.component';
import { ParentDataComponent } from './aluno/parent-data/parent-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferencia,
    AlunoComponentComponent,
    ParentDataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
