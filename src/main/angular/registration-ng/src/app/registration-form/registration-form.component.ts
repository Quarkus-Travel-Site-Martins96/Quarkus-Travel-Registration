import { Component, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS, DateUtils, maxDate } from './material/app-date-adapter';
import { Environment } from '../../environments/environment';
import { catchError, firstValueFrom, Observable, retry, Subscription, throwError } from 'rxjs';
import { RestService } from '../rest-service';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { UsernameAlreadyUsedResponse } from '../vo/username-already-usedVO';

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
	
	sub: Subscription;
	subBtnText: string;

	maxDate = maxDate;
	
	username: string;
	name: string;
	surname: string;
	country: string;
	birthdate: string;
	email: string;

	usernameMissing: boolean = false;
	nameMissing: boolean = false;
	surnameMissing: boolean = false;
	countryMissing: boolean = false;
	birthdateMissing: boolean = false;
	emailMissing: boolean = false;

	usernameChecking: boolean = false;
	usernameAlreadyInUse: boolean = false;
	usernameFree: boolean = false;

	beError: boolean = false;
	regHost: string;
	
	constructor(private rest: RestService) {
        this.rest = rest;
    }

	ngOnInit(): void {
		this.subBtnText = "Register Now";
		this.regHost = Environment.getRegistrationHost();
	}
	
	OnDateChange(date: Date): void {
		this.birthdate = DateUtils.format(date);
	}

	private usernameCheckingFnc(b: boolean): void {
		this.usernameChecking = b;
		if (!b) {
			this.subBtnText = "Register Now";
		} else {
			this.subBtnText = "Wait...";
		}
	}

	checkUsername() {
		this.resetChecks();
		this.usernameCheckingFnc(true);
		this.checkUsernameCall();
	}
	
	update(): void {
		this.resetChecks();
		this.checkFields();
		localStorage.setItem('reg_username', this.username);
		localStorage.setItem('reg_name', this.name);
		localStorage.setItem('reg_surname', this.surname);
		localStorage.setItem('reg_country', this.country);
		localStorage.setItem('reg_email', this.email);
		localStorage.setItem('reg_birthdate', this.birthdate);
	}

	private resetChecks(): void {
		this.beError = false;
		this.usernameFree = false;
		this.usernameMissing = false;
		this.usernameAlreadyInUse = false;
		this.usernameCheckingFnc(false);
		this.nameMissing = false;
		this.surnameMissing = false;
		this.countryMissing = false;
		this.emailMissing = false;
		this.birthdateMissing = false;
	}

	private checkFields(): boolean {
		this.checkUsername();
		if (!this.username) {
			this.usernameMissing = true;
			console.debug("Missing username");
			return false;
		}
		if (!this.name) {
			this.nameMissing = true;
			console.debug("Missing name");
			return false;
		}
		if (!this.surname) {
			this.surnameMissing = true;
			console.debug("Missing surname");
			return false;
		}
		if (!this.country) {
			this.countryMissing = true;
			console.debug("Missing country");
			return false;
		}
		if (!this.birthdate) {
			this.birthdateMissing = true;
			console.debug("Missing birthdate");
			return false;
		}
		if (!this.email) {
			this.emailMissing = true;
			console.debug("Missing email");
			return false;
		}
		while(this.checkUsername) {
			setTimeout(() => {}, 100);
		}
		if (this.usernameAlreadyInUse) {
			console.debug("Username " + this.username + " already taked");
			return false;
		}

		return true;
	}

	private async checkUsernameCall() {
		if (!this.username) {
			this.usernameMissing = true;
			this.usernameCheckingFnc(false);
			console.debug("Missing username");
			return;
		}

		if (this.sub)
			this.sub.unsubscribe();
		const observ: Observable<HttpResponse<UsernameAlreadyUsedResponse>> = this.rest
				.sendGet<UsernameAlreadyUsedResponse>(this.regHost + "/registration/already-used/" + this.username, new HttpHeaders({
					'content-type': 'application/json'
				}));
		const res: boolean = await firstValueFrom(observ)
			.then(b =>{
				if (!b || !b.ok) {
					this.beError = true;
					console.debug("REST response KO");
					return true;
				} else if (!b.body) {
					this.beError = true;
					console.debug("REST response empty payload");
					return true;
				} else {
					this.beError = false;
					console.debug('Rest call finished, response: ', b.body);
					const res: boolean = b.body.alreadyUsed;
					if (!res) {
						this.usernameFree = true;
					}
					return res;
				}
			},
			err => {
				console.log("Error in BE call!", err);
				this.beError = true;
				return true;
			})
			.finally(() => {
				this.usernameCheckingFnc(false);
			});

		this.usernameAlreadyInUse = res;
		console.debug("Is " + this.username + " already in use? " + this.usernameAlreadyInUse);
	} 

}
