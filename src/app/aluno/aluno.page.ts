import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/providers/data.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.page.html',
  styleUrls: ['./aluno.page.scss'],
})
export class AlunoPage implements OnInit {

  alunos: any = [];

  constructor(private dataProvider: DataService) {
    this.dataProvider.data$.subscribe(() => {
      this.alunos = this.dataProvider.data$.value
    })

    this.getAlunos()
  }

  getAlunos = async () => {
    try {
      this.alunos = await this.dataProvider.read('aluno').toPromise()
      this.dataProvider.data$.next(this.alunos)
    } catch (error) {
      console.error('erro ao tentar recuprar lista de alunos', error)
    }
  }


  ngOnInit() {
    this.getAlunos()
  }

}
