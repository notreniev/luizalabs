import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlunoEditPageRoutingModule } from './aluno-edit-routing.module';

import { AlunoEditPage } from './aluno-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlunoEditPageRoutingModule
  ],
  declarations: [AlunoEditPage]
})
export class AlunoEditPageModule {}
