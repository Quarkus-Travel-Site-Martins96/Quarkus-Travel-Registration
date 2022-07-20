import { Component } from '@angular/core';
import { Environment } from 'src/environments/environment';

@Component({
  selector: 'app-mail-validation-ty',
  templateUrl: './mail-validation-ty.component.html',
  styleUrls: ['./mail-validation-ty.component.css']
})
export class MailValidationTyComponent {

  private homeUrl: string;

  constructor() {
    this.homeUrl = Environment.getHomeHost();
  }

  toHome(): void {
    location.href = this.homeUrl;
  }

}
