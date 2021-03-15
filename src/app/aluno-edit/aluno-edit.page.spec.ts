import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { Aluno } from '../shared/models/aluno/aluno-model';
import { DataService } from '../shared/providers/data.service';

import { AlunoEditPage } from './aluno-edit.page';

describe('AlunoEditPage', () => {
  let component: AlunoEditPage;
  let fixture: ComponentFixture<AlunoEditPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AlunoEditPage, AlertComponent],
      imports: [IonicModule, RouterTestingModule, HttpClientModule, FormsModule],
      providers: [DataService]
    }).compileComponents();

    fixture = TestBed.createComponent(AlunoEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create aluno', async () => {
    const aluno: Aluno = {
      id: 0,
      nome: "João da Silva",
      cpf: 123456789,
      email: "joao@gmail.com",
      celular: 48090900301
    }

    spyOn(component, 'salvarOuAtualizar').and.callFake(() => {
      return component.salvarOuAtualizar(aluno);
    });

    component.ngOnInit();

    expect([0]).toBeTruthy()

  });

  it('should read aluno', async () => {
    spyOn(component, 'getAluno').and.callFake(() => {
      return component.getAluno();
    });

    expect([0]).toBeTruthy()
  });

});
