import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Aluno } from '../shared/models/aluno/aluno-model';
import { Generico } from '../shared/models/aluno/generico-model';
import { AlertService } from '../shared/providers/alert.service';
import { DataService } from '../shared/providers/data.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.page.html',
  styleUrls: ['./aluno.page.scss'],
})
export class AlunoPage implements OnInit {

  alunos: Array<Generico>;
  filtro: string;

  @ViewChild('search') search: string;

  constructor(
    private dataProvider: DataService,
    private alertService: AlertService,
    private alertController: AlertController
  ) {
    this.dataProvider.data$.subscribe(() => {
      this.alunos = this.dataProvider.data$.value;
    });
  }

  /**
   * Exibe alerta de remoção e
   * remove caso afirmativo
   */
  confirmaRemover = async (aluno: any) => {
    const config = {
      header: 'Confirmação!',
      message: 'Deseja remover o aluno?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Canceled');
          }
        },
        {
          text: 'Remover',
          handler: () => {
            this.remover(aluno);
          }
        }
      ]
    };

    await this.alertController
      .create(config)
      .then(res => res.present())
      .catch(error => console.error(error));
  }

  /**
   * Remove 1 aluno pelo id
   */
  private remover = async (aluno) => {
    if (!aluno) return;

    try {
      if (aluno.id) {
        await this.dataProvider.delete(`aluno/${aluno.id}`).toPromise();
        this.alertService.success('Aluno removido com sucesso!');

        setTimeout(() => {
          this.getAlunos();
        }, 1000);

      }
    } catch (error) {
      this.alertService.error(`Erro ao remover aluno! ${error.message}`);
    }
  }

  /**
   * Retorna a lista de alunos
   */
  getAlunos = async () => {
    try {
      this.alunos = await this.dataProvider.read('alunos').toPromise();
      this.dataProvider.data$.next(this.alunos);
    } catch (error) {
      console.error('erro ao tentar recuprar lista de alunos', error);
    }
  }


  ngOnInit() {
    this.getAlunos();
  }

}
