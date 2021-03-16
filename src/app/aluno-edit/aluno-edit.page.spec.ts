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
  let service: DataService;
  let component: AlunoEditPage;
  let fixture: ComponentFixture<AlunoEditPage>;
  let httpTestingController: HttpTestingController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AlunoEditPage, AlertComponent],
      imports: [IonicModule, RouterTestingModule, HttpClientTestingModule, FormsModule],
      providers: [DataService]
    }).compileComponents();

    fixture = TestBed.createComponent(AlunoEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.inject(DataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  }));

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create alunoEditComponent', () => {
    expect(component).toBeTruthy();
  })

  it('create should make a POST HTTP request with resource as body', () => {
    const alunoObj = {
      nome: "João da Silva2",
      cpf: 1234567890,
      email: "joao@gmail.com",
      celular: '048090900301'
    }

    const obj = JSON.stringify({ aluno: alunoObj });
    service.create('aluno', obj).subscribe(res => {
      expect(res).toBeTruthy();
    });

    const req = httpTestingController.expectOne('http://localhost:3100/aluno', 'post to api')
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toBeTruthy();
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(alunoObj, { status: 200, statusText: 'Ok' });
    httpTestingController.verify();
  });


});
