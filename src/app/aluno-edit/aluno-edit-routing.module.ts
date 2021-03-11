import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunoEditPage } from './aluno-edit.page';

const routes: Routes = [
  {
    path: '',
    component: AlunoEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunoEditPageRoutingModule {}
