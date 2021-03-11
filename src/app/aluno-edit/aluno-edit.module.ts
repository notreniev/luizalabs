import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlunoEditPageRoutingModule } from './aluno-edit-routing.module';

import { AlunoEditPage } from './aluno-edit.page';

import { AlertComponentModule } from '../shared/components/alert/alert.component.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertComponentModule,
    AlunoEditPageRoutingModule
  ],
  declarations: [AlunoEditPage]
})
export class AlunoEditPageModule { }
