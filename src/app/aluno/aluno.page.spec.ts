import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
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
      imports: [IonicModule.forRoot(), HttpClientModule, RouterTestingModule, FormsModule],
      providers: [DataService]
    }).compileComponents();

    fixture = TestBed.createComponent(AlunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', async () => {
    expect(component).toBeTruthy();
  });
});
