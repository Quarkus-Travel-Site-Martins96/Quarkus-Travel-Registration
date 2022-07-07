export class RestServiceEnvUrl {

	private constructor() { }

	static getHostUrl(appUrl: string): string {
		let host: string;
		
		console.debug("Call!!!")
		var request = new XMLHttpRequest();
		request.open('GET', '/endpoint/' + appUrl, false);
		request.send();
		
		if (request.status === 200) {
		  	let r: string = request.responseText;
			console.debug("response " + r)
			host = r;
		} else {
			console.error("Error retrieve endpoint");
			host = "";
		}
		
		console.debug("chiamata fatta");
		console.debug("caricato? --> " + host);
		return host;
	}
}
