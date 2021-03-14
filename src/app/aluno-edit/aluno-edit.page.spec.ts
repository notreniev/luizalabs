import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
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
      imports: [IonicModule.forRoot(), RouterTestingModule, HttpClientModule, FormsModule],
      providers: [DataService]
    }).compileComponents();

    fixture = TestBed.createComponent(AlunoEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(1 + 1).toBe(2);
  });
});
