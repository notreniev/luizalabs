import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../shared/providers/alert.service';
import { DataService } from '../shared/providers/data.service';

@Component({
  selector: 'app-aluno-edit',
  templateUrl: './aluno-edit.page.html',
  styleUrls: ['./aluno-edit.page.scss'],
})
export class AlunoEditPage implements OnInit {

  clicou = false;
  aluno: any = {};

  constructor(
    private alertService: AlertService,
    private dataProvider: DataService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  salvar = async (aluno) => {
    console.log('aluno', aluno)
    if (!aluno) return
    try {

      if (aluno.id) {
        await this.dataProvider.update(`aluno/${aluno.id}`, { "aluno": aluno }).toPromise()
        this.alertService.success('Aluno atualizado com sucesso!')
      } else {
        await this.dataProvider.create('aluno', { "aluno": aluno }).toPromise()
        this.alertService.success('Aluno cadastrado com sucesso!')
      }

    } catch (error) {
      console.error('error', error)
      this.alertService.error('Problemas ao criar aluno!')
    }
  }

  getAluno = async () => {
    const id = this.activatedRoute.snapshot.params.id
    try {
      this.aluno = await this.dataProvider.read(`aluno/${id}`).toPromise()
    } catch (error) {
      console.error('erro ao extrair o id da URL', error);
    }
  }


  async ngOnInit() {
    this.getAluno()
  }


}
