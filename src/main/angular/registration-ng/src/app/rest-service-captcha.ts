import { Environment } from "src/environments/environment";

export class RestServiceCaptcha {

	private constructor() { }

	static getKeySite(): string {
		const appUrl: string = Environment.getRegistrationHost();
		let keySite: string;
		
		var request = new XMLHttpRequest();
		request.open('GET', '/registration/captcha-keysite', false);
		request.send();
		
		if (request.status === 200) {
		  	let r: string = request.responseText;
			console.debug("response " + r)
			keySite = r;
		} else {
			console.error("Error retrieve endpoint");
			keySite = "";
		}
		
		return keySite;
	}
}
