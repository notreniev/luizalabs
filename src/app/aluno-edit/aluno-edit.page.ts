import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../shared/providers/alert.service';
import { DataService } from '../shared/providers/data.service';

@Component({
  selector: 'app-aluno-edit',
  templateUrl: './aluno-edit.page.html',
  styleUrls: ['./aluno-edit.page.scss'],
})
export class AlunoEditPage implements OnInit {

  clicouSalvar = false;
  clicouRemover = false;
  operacao = "Edição";
  aluno: any = {};

  constructor(
    private alertService: AlertService,
    private dataProvider: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  salvar = async (aluno) => {
    this.clicouSalvar = true
    if (!aluno) return
    try {

      if (aluno.id) {
        await this.dataProvider.update(`aluno/${aluno.id}`, { "aluno": aluno }).toPromise()
        this.alertService.success('Aluno atualizado com sucesso!')
      } else {
        await this.dataProvider.create('aluno', { "aluno": aluno }).toPromise()
        this.alertService.success('Aluno cadastrado com sucesso!')
      }

      this.router.navigate(['/aluno'])
      this.clicouSalvar = false;
      this.getAlunos()

    } catch (error) {
      console.error('error', error)
      this.alertService.error(`Problemas ao criar aluno! ${error.message}`)
    }

  }

  remover = async (aluno) => {
    this.clicouRemover = true
    if (!aluno) return

    try {
      if (aluno.id) {
        await this.dataProvider.delete(`aluno/${aluno.id}`).toPromise()
        this.alertService.success('Aluno removido com sucesso!')
        this.router.navigate(['/aluno'])
        this.clicouRemover = false;
      }
    } catch (error) {
      this.alertService.error(`Erro ao remover aluno! ${error.message}`)
    }

    this.getAlunos()
  }

  getAluno = async () => {
    const { id } = this.activatedRoute.snapshot.params
    if (!id) return
    try {
      this.aluno = await this.dataProvider.read(`aluno/${id}`).toPromise()
    } catch (error) {
      console.error('erro ao extrair o id da URL', error);
    }
  }

  getAlunos = async () => {
    try {
      this.aluno = await this.dataProvider.read('aluno').toPromise()
      this.dataProvider.data$.next(this.aluno)
    } catch (error) {
      console.error('erro ao tentar recuprar lista de alunos', error)
    }
  }


  async ngOnInit() {
    this.getAluno()
  }


}
