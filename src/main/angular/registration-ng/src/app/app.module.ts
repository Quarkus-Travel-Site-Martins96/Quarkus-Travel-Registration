import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { TypageComponent } from './typage/typage.component';
import { RegContainerComponent } from './reg-container/reg-container.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './registration-form/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    TypageComponent,
    RegContainerComponent,
	ToolbarComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	FormsModule,
	BrowserAnimationsModule,
	MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
