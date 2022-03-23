import { MatDateFormats, NativeDateAdapter } from '@angular/material/core';

export class AppDateAdapter extends NativeDateAdapter {

	format(date: Date): string {
		return DateUtils.format(date);
	}
	
	
	
}
export const APP_DATE_FORMATS: MatDateFormats = {
	parse: {
		dateInput: {
			dateInput: 'YYYY-MM-DD'
		},
	},
	display: {
		dateInput: 'YYYY-MM-DD',
		monthYearLabel: { year: 'numeric', month: 'numeric' },
		dateA11yLabel: {
			year: 'numeric', 
			month: 'numeric', 
			day: 'numeric'
		},
		monthYearA11yLabel: { year: 'numeric', month: 'long' }
	}
};
export const maxDate: Date = new Date();

export class DateUtils {
	static format(date: Date): string {
		let day: string = date.getDate().toString();
		day = +day < 10 ? '0' + day : day;
		let month: string = (date.getMonth() + 1).toString();
		month = +month < 10 ? '0' + month : month;
		let year = date.getFullYear();
		return `${year}-${month}-${day}`;
	}
}
