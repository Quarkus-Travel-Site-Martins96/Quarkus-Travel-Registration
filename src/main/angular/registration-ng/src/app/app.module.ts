import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { TypageComponent } from './typage/typage.component';
import { RegContainerComponent } from './reg-container/reg-container.component';
import { RegContainer2Component } from './reg-container2/reg-container2.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './registration-form/material/material.module';
import { RegistrationForm2Component } from './registration-form2/registration-form2.component';
import { Routes, RouterModule } from '@angular/router';
import { RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings, RECAPTCHA_SETTINGS } from 'ng-recaptcha';

import { RoutesUtils } from './routes.utils';
import { CourtesyPageComponent } from './courtesy-page/courtesy-page.component';
import { RestServiceCaptcha } from './rest-service-captcha';
import { MailValidationTyComponent } from './mail-validation-ty/mail-validation-ty.component';

const routes: Routes = RoutesUtils.getRoutes();

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    TypageComponent,
    RegContainerComponent,
	  ToolbarComponent,
    RegistrationForm2Component,
    RegContainer2Component,
    CourtesyPageComponent,
    MailValidationTyComponent
  ],
  imports: [
    BrowserModule,
	  HttpClientModule,
	  FormsModule,
	  BrowserAnimationsModule,
	  MaterialModule,
    RouterModule.forRoot(routes),
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: RestServiceCaptcha.getKeySite(),
      } as RecaptchaSettings,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
