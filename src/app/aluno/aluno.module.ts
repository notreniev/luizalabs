import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlunoPageRoutingModule } from './aluno-routing.module';

import { AlunoPage } from './aluno.page';
import { AlertComponentModule } from '../shared/components/alert/alert.component.module';

import { SearchPipeModule } from '../shared/pipes/search.pipe.module';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertComponentModule,
    SearchPipeModule,
    AlunoPageRoutingModule,
    NgxMaskIonicModule
  ],
  declarations: [AlunoPage]
})
export class AlunoPageModule { }
