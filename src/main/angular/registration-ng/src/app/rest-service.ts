import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieManager } from './cookie-utils';


@Injectable({
	providedIn: 'root'
})
export class RestService {

	constructor(private http: HttpClient, private cookieMng: CookieManager) { }

	sendPostGetRawText(url: string, body: any, headers: HttpHeaders): Observable<HttpResponse<string>> {
		// call
		return this.http.post(url, body, {
			headers,
			observe: 'response',
			responseType: 'text'
		});
	}

	sendPostWithString(url: string, body: string, headers: HttpHeaders): Observable<HttpResponse<any>> {
		return this.http.post(url, body, {
			headers,
			observe: 'response'
		})
	}

	sendPost<T>(url: string, body: any, headers: HttpHeaders): Observable<HttpResponse<T>> {
		return this.http.post<T>(url, body, {
			headers,
			observe: 'response',
			responseType: 'json'
		});
	}

	sendGet<T>(url: string, headers: HttpHeaders): Observable<HttpResponse<T>> {
		return this.http.get<T>(url, {
			headers,
			observe: 'response'
		});
	}

	sendGetRawText(url: string, headers: HttpHeaders): Observable<HttpResponse<string>> {
		return this.http.get(url, {
			headers,
			observe: 'response',
			responseType: 'text'
		});
	}

	sendGetAvatar(url: string): Observable<HttpResponse<Blob>> {
		return this.http.get(url, {
			observe: 'response',
			responseType: 'blob'
		});
	}

}
