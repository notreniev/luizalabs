import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlunoEditPageRoutingModule } from './aluno-edit-routing.module';

import { AlunoEditPage } from './aluno-edit.page';

import { AlertComponentModule } from '../shared/components/alert/alert.component.module';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertComponentModule,
    AlunoEditPageRoutingModule,
    NgxMaskIonicModule
  ],
  declarations: [AlunoEditPage]
})
export class AlunoEditPageModule { }
