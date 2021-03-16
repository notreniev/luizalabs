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

  it('should create aluno', async () => {
    const aluno: Aluno = {
      id: 0,
      nome: "João da Silva2",
      cpf: 1234567890,
      email: "joao@gmail.com",
      celular: '048090900301'
    }

    expect(component.salvarOuAtualizar(aluno)).toBeTruthy();

  });

  it('should delete aluno', (done) => {
    const aluno = { id: 69 }

    expect(component.remover(aluno)).toBeTruthy();
    done();
  });


});
