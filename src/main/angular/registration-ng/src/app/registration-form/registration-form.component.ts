import { Component, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS, DateUtils, maxDate } from './material/app-date-adapter';

@Component({
	selector: 'app-registration-form',
	templateUrl: './registration-form.component.html',
	styleUrls: ['./registration-form.component.css'],
	providers: [
		{provide: DateAdapter, useClass: AppDateAdapter},
    	{provide: MAT_DATE_FORMATS, useClass: AppDateAdapter, useValue: APP_DATE_FORMATS}
	]
})
export class RegistrationFormComponent implements OnInit {
	
	maxDate = maxDate;
	
	name: string;
	surname: string;
	country: string;
	birthdate: string;
	email: string;
	
	constructor() { }

	ngOnInit(): void {
	}
	
	OnDateChange(date: Date): void {
		this.birthdate = DateUtils.format(date);
	}
	
	update(): void {
		
	}

}
