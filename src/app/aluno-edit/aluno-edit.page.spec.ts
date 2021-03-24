import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, inject, resetFakeAsyncZone, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { AlertComponent } from '../shared/components/alert/alert.component';
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

  it('should have <strong> with Cadastro de alunos - Edição', () => {
    const element: HTMLElement = fixture.nativeElement;
    const strong = element.querySelector('strong');
    expect(strong.textContent).toContain('Cadastro de alunos - Edição');
  })

  it('should click salvarOuAtualizar button', fakeAsync(() => {
    spyOn(component, 'salvarOuAtualizar');
    const element: HTMLElement = fixture.nativeElement;
    const button = element.querySelector('ion-button');
    button.click();
    tick();
    expect(component.salvarOuAtualizar).toHaveBeenCalled();
  }))

});
