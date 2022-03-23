export class RestServiceEnvUrl {

	private constructor() { }

	static getHostUrl(appUrl: string): string {
		let host: string;
		
		console.log("Call!!!")
		var request = new XMLHttpRequest();
		request.open('GET', '/endpoint/' + appUrl, false);
		request.send();
		
		if (request.status === 200) {
		  	let r: string = request.responseText;
			console.log("response " + r)
			host = r;
		} else {
			console.error("Error retrieve endpoint");
			host = "";
		}
		
		console.log("chiamata fatta");
		console.log("caricato? --> " + host);
		return host;
	}
}
