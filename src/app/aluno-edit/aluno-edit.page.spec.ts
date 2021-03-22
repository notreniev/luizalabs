import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, inject, resetFakeAsyncZone, TestBed, tick, waitForAsync } from '@angular/core/testing';
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
      imports: [IonicModule, RouterTestingModule, HttpClientTestingModule, FormsModule],
      providers: [DataService]
    }).compileComponents();

    fixture = TestBed.createComponent(AlunoEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should create an instance of alunoEditComponent', () => {
    expect(component).toBeDefined();
    expect(component).toBeTruthy();
  });

  it('should create Aluno', () => {
    fixture.detectChanges();
    const aluno: Aluno = {
      nome: "Paulo da Silva",
      cpf: "6890909202011",
      celular: "5191120621",
      email: "evcanez@gmail.com"
    }

    component.salvarOuAtualizar(aluno)
      .then(res => console.log('result', res))
      .catch(err => console.log(err))

  })

});
