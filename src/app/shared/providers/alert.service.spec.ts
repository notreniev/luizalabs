import { TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlertService } from './alert.service';

describe('AlertService', () => {
  let mockServiceSpy;

  mockServiceSpy = jasmine.createSpyObj('DataService', {
    data$: 'data',
    http: 'http',
    create: 'create',
    read: 'read'
  })

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AlertService],
      imports: [AlertService, IonicModule.forRoot()],
      providers: [AlertService, {
        provide: AlertService, useValue: mockServiceSpy
      }]

    }).compileComponents();
  }));

  it('should be created', () => {
    expect(AlertService).toBeTruthy();
  });
});
