import { Injectable } from '@angular/core';
import { RestServiceEnvUrl } from 'src/app/rest-service-env-url';
import { EnvSingleton } from './env-singleton';

export const environment = {
  production: true
};



@Injectable({
	providedIn: 'root'
})
export class Environment {
	
	private static singleton: EnvSingleton = EnvSingleton.getInstance();
	
	private constructor() { }
	
	public static getHomeHost(): string {
		if (!this.singleton.homeHost)
			this.singleton.homeHost = RestServiceEnvUrl.getHostUrl('home');
		return this.singleton.homeHost;
	}
	
	public static getHotelHost(): string {
		console.log("carco host hotel");
		if (!this.singleton.hotelHost)
			this.singleton.hotelHost = RestServiceEnvUrl.getHostUrl('hotel');
		console.log("caricato " + this.singleton.hotelHost);
		return this.singleton.hotelHost;
	}
	
	public static getLoginHost(): string {
		if (!this.singleton.loginHost)
			this.singleton.loginHost = RestServiceEnvUrl.getHostUrl('login');
		return this.singleton.loginHost;
	}
	
	public static getUserManagerHost(): string {
		if (!this.singleton.userMngHost)
			this.singleton.userMngHost = RestServiceEnvUrl.getHostUrl('user-management');
		return this.singleton.userMngHost;
	}
	
	
	
}