import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlunoPageRoutingModule } from './aluno-routing.module';

import { AlunoPage } from './aluno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlunoPageRoutingModule
  ],
  declarations: [AlunoPage]
})
export class AlunoPageModule {}
