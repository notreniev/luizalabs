import { HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { DataService } from './data.service';

describe('DataService', () => {
  let mockServiceSpy;

  beforeEach(waitForAsync(() => {

    mockServiceSpy = jasmine.createSpyObj('DataService', {
      data$: 'data',
      http: 'http',
      create: 'create',
      read: 'read'
    });

    TestBed.configureTestingModule({
      declarations: [DataService],
      imports: [IonicModule.forRoot(), HttpClientModule, RouterTestingModule],
      providers: [DataService, {
        provide: DataService, useValue: mockServiceSpy
      }]
    }).compileComponents();

  }));

  it('should be created', () => {
    expect(DataService).toBeTruthy();
  });
});
