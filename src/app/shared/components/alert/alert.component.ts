import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlertService } from '../../providers/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.subscription = this.alertService.getAlert()
      .subscribe(message => {
        switch (message && message.type) {
          case 'success':
            message.cssClass = 'alert alert-success';
            break;
          case 'error':
            message.cssClass = 'alert alert-danger';
            break;
        }

        this.message = '';
        this.message = message;

        setTimeout(() => {
          if (this.message) this.message = ""
        }, environment.timeout)
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
