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
	usernameValidation: number = undefined;

	beError: boolean = false;
	regHost: string;
	
	constructor(private rest: RestService) {
        this.rest = rest;
    }

	ngOnInit(): void {
		this.subBtnText = "Confirm";
		this.regHost = Environment.getRegistrationHost();

		if (localStorage.getItem("reg_username")) {
			this.username = localStorage.getItem("reg_username");
			localStorage.removeItem("reg_username");
		}
		if (localStorage.getItem("reg_name")) {
			this.name = localStorage.getItem("reg_name");
			localStorage.removeItem("reg_name");
		}
		if (localStorage.getItem("reg_surname")) {
			this.surname = localStorage.getItem("reg_surname");
			localStorage.removeItem("reg_surname");
		}
		if (localStorage.getItem("reg_country")) {
			this.country = localStorage.getItem("reg_country");
			localStorage.removeItem("reg_country");
		}
		if (localStorage.getItem("reg_birthdate")) {
			this.birthdate = localStorage.getItem("reg_birthdate");
			localStorage.removeItem("reg_birthdate");
		}
		if (localStorage.getItem("reg_email")) {
			this.email = localStorage.getItem("reg_email");
			localStorage.removeItem("reg_email");
		}
	}
	
	OnDateChange(date: Date): void {
		this.birthdate = DateUtils.format(date);
	}

	private usernameCheckingFnc(b: boolean): void {
		this.usernameChecking = b;
		if (!b) {
			this.subBtnText = "Confirm";
		} else {
			this.subBtnText = "Wait...";
		}
	}

	async checkUsername() {
		this.resetChecks();
		this.usernameCheckingFnc(true);
		await this.checkUsernameCall();
	}
	
	private resetChecks(): void {
		this.beError = false;
		this.usernameValidation = undefined;
		this.usernameMissing = false;
		this.usernameCheckingFnc(false);
		this.nameMissing = false;
		this.surnameMissing = false;
		this.countryMissing = false;
		this.emailMissing = false;
		this.birthdateMissing = false;
	}

	private async checkFields(): Promise<boolean> {
		await this.checkUsername();
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
		if (this.usernameValidation !== 0) {
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
				.sendGet<UsernameAlreadyUsedResponse>(this.regHost + "/registration/check-username/" + this.username, new HttpHeaders({
					'accept': 'application/json'
				}));
		const res: number = await firstValueFrom(observ)
			.then(b => {
					if (!b || !b.ok || !b.body) {
						this.beError = true;
						console.debug("REST response KO");
						return 3;
					} else {
						this.beError = false;
						console.debug('Rest call finished, response: ', b.body);
						return b.body.usernameStatus;
					}
				},
				err => {
					console.log("Error in BE call!", err);
					this.beError = true;
					return 3;
				}
			)
			.finally(() => {
				this.usernameCheckingFnc(false);
			});

		this.usernameValidation = res;
		console.debug("Username " + this.username + " status = " + res);
	} 

	async update() {
		this.resetChecks();
		const checksPassed: boolean = await this.checkFields();
		if (!checksPassed) {
			console.debug("Form checks are not good");
			return;
		}
		localStorage.setItem('reg_username', this.username);
		localStorage.setItem('reg_name', this.name);
		localStorage.setItem('reg_surname', this.surname);
		localStorage.setItem('reg_country', this.country);
		localStorage.setItem('reg_email', this.email);
		localStorage.setItem('reg_birthdate', this.birthdate);
		location.href = "/?navPage=step2";
	}

}
