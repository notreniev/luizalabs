import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Aluno } from '../shared/models/aluno/aluno-model';
import { Generico } from '../shared/models/aluno/generico-model';
import { AlertService } from '../shared/providers/alert.service';
import { DataService } from '../shared/providers/data.service';

@Component({
  selector: 'app-aluno-edit',
  templateUrl: './aluno-edit.page.html',
  styleUrls: ['./aluno-edit.page.scss'],
})
export class AlunoEditPage implements OnInit {

  aluno: Generico = { id: undefined, nome: '', cpf: undefined, email: '', celular: undefined };

  constructor(
    private alertService: AlertService,
    private dataProvider: DataService,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private router: Router
  ) {
  }

  /**
   * Salva ou atualiza dados
   * do aluno
   */
  salvarOuAtualizar = async (aluno: Aluno) => {

    if (!aluno) return;

    try {

      if (aluno.id) {
        await this.dataProvider.update(`aluno/${aluno.id}`, { aluno: aluno }).toPromise();
        this.alertService.success('Aluno atualizado com sucesso!');
      } else {
        await this.dataProvider.create('aluno', { aluno: aluno }).toPromise();
        this.alertService.success('Aluno cadastrado com sucesso!');
      }

      setTimeout(() => {
        this.router.navigate(['/aluno']);
      }, 1000);

    } catch (error) {
      console.error('error', error.error);
      this.alertService.error(error.error.message);
    }

    return aluno;
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
   * Remove aluno
   */
  private remover = async (aluno) => {
    if (!aluno) return;

    try {
      if (aluno.id) {
        await this.dataProvider.delete(`aluno/${aluno.id}`).toPromise();
        this.alertService.success('Aluno removido com sucesso!');

        setTimeout(() => {
          this.router.navigate(['/aluno']);
        }, 1000);

      }
    } catch (error) {
      console.log('remover com erro', aluno.id);
      this.alertService.error(`Erro ao remover aluno! ${error.message}`);
    }
  }


  /**
   * Recupera dados de um aluno
   */
  getAluno = async () => {
    const { id } = this.activatedRoute.snapshot.params;
    if (!id) return;
    try {
      this.aluno = await this.dataProvider.read(`aluno/${id}`).toPromise();
    } catch (error) {
      console.error('erro ao extrair o id da URL', error);
    }
  }


  /**
   * Recupera lista de alunos
   */
  getAlunos = async () => {
    try {
      this.aluno = await this.dataProvider.read('alunos').toPromise();
      this.dataProvider.data$.next(this.aluno as any);
    } catch (error) {
      console.error('erro ao tentar recuperar lista de alunos', error);
    }
  }


  /**
   * Avisa o angular pra detectar
   * mudança na lista de alunos
   */
  ionViewWillLeave() {
    this.getAlunos();
  }


  /**
   * Carrega objeto aluno
   * para carregar formulário com 
   * os dados caso haja um aluno.id
   */
  async ngOnInit() {
    this.getAluno();
  }


}
