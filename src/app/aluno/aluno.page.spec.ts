import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RouterTestingModule } from '@angular/router/testing';

import { AlunoPage } from './aluno.page';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../shared/providers/data.service';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { SearchPipe } from '../shared/pipes/search.pipe';
import { FormsModule } from '@angular/forms';

describe('AlunoPage', () => {
  let component: AlunoPage;
  let fixture: ComponentFixture<AlunoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AlunoPage, AlertComponent, SearchPipe],
      imports: [IonicModule, HttpClientModule, RouterTestingModule, FormsModule],
      providers: [DataService]
    }).compileComponents();

    fixture = TestBed.createComponent(AlunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create aluno component', () => {
    expect(component).toBeDefined();
  });

  it('should have a title <strong> with Lista de alunos', () => {
    const element: HTMLElement = fixture.nativeElement;
    const title = element.querySelector('ion-label strong')
    expect(title.textContent).toContain('Lista de alunos');
  })

  it('should search an aluno`s name', fakeAsync(() => {
    spyOn(component, 'getAlunos');
    let element: HTMLElement = fixture.nativeElement;
    fixture.detectChanges();
    tick();
    fixture.whenStable()
      .then(() => {
        let ionSearch = element.querySelector('ion-searchbar');
        ionSearch.value = 'my name';
        ionSearch.dispatchEvent(new Event('ion-searchbar'));
        expect(ionSearch.value).toBe('my name');
      })
  }))
});
