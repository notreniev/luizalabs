import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunoPage } from './aluno.page';

const routes: Routes = [
  {
    path: '',
    component: AlunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunoPageRoutingModule {}
