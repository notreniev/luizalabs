import { Component, OnInit } from '@angular/core';
import { AlertService } from '../shared/providers/alert.service';

@Component({
  selector: 'app-aluno-edit',
  templateUrl: './aluno-edit.page.html',
  styleUrls: ['./aluno-edit.page.scss'],
})
export class AlunoEditPage implements OnInit {

  clicou = false;
  aluno: any = {};

  constructor(private alertService: AlertService) { }

  salvar(aluno) {
    console.log('aluno', aluno)
    this.alertService.success('Aluno cadastrado com sucesso')
  }

  ngOnInit() {
  }

}
