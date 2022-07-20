import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom, Observable, retry } from 'rxjs';
import { Environment } from 'src/environments/environment';
import { RestService } from '../rest-service';
import { UserVO } from '../vo/userVO';

@Component({
  selector: 'app-registration-form2',
  templateUrl: './registration-form2.component.html',
  styleUrls: ['../registration-form/registration-form.component.css']
})
export class RegistrationForm2Component implements OnInit {

  pwd1: string;
  pwd2: string;
  token: string;

  pwd1Missing: boolean = false;
  pwd2Missing: boolean = false;
  sendingRequest: boolean = false;

  pwdMissmatch: boolean = false;

  regHost: string;

  constructor(private rest: RestService) {
    this.rest = rest;
    this.regHost = Environment.getRegistrationHost();
    this.token = undefined;
  }

  ngOnInit(): void {

  }


  checkPasswords(): boolean {
    this.resetFlags();
    if (this.pwd1 === this.pwd2)
      this.pwdMissmatch = false;
    else
      this.pwdMissmatch = true;
    return this.pwdMissmatch
  }

  async update(): Promise<void> {
    this.sendingRequest = true;
    try {
      this.resetFlags();
      if (this.checkPasswords()) {
        return;
      } 
      
      await this.executionUpdate();
      
    } finally {
      this.sendingRequest = false; 
    }
  }

  async executionUpdate(): Promise<void> {
    const username: string = localStorage.getItem("reg_username"),
        name: string = localStorage.getItem("reg_name"),
        surname: string = localStorage.getItem("reg_surname"),
        country: string = localStorage.getItem("reg_country"),
        birthdate: string = localStorage.getItem("reg_birthdate"),
        email: string = localStorage.getItem("reg_email");

    const createUserRequest: UserVO = {
      username: username,
      name: name,
      surname: surname,
      email: email,
      country: country,
      birthdate: birthdate,
      password: this.pwd1,
      tokenCapcha: this.token
    }

    await this.callRegisterSvc(createUserRequest)
      .then(r => {
        if (r) {
          location.href = "/?navPage=typage";
        } else {
          location.href = "/?navPage=courtesy";
        }
      })
      .catch(err => {
        console.error(err);
        location.href = "/?navPage=courtesy";
      });
  }


  private resetFlags(): void {
    this.pwd1Missing = false;
    this.pwd2Missing = false;
    this.pwdMissmatch = false;
  }

  private async callRegisterSvc(request: UserVO): Promise<boolean> {
    const observ: Observable<HttpResponse<any>> = this.rest
				.sendPost<any>(this.regHost + "/registration/register/" , request, new HttpHeaders({
					'content-type': 'application/json'
				}));

    let result: boolean;
    await firstValueFrom(observ)
      .then(resp => {
        result = true;
      })
      .catch(err => {
        console.error(err);
        result = false;
      });
    return result;
  }

  backPage(): void {
    location.href = "/?navPage=step1";
  }
}
