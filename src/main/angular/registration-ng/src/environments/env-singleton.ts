export class EnvSingleton {
    private static instance: EnvSingleton;
	private _homeHost: string;
	private _hotelHost: string;
	private _loginHost: string;
	private _userMngHost: string;
	private _registration: string;
	private _staticContent: string;
    

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() { }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): EnvSingleton {
        if (!EnvSingleton.instance) {
            EnvSingleton.instance = new EnvSingleton();
        }

        return EnvSingleton.instance;
    }

	public set homeHost(value: string) {
        this._homeHost = value;
    }
    public get homeHost(): string {
        return this._homeHost;
    }
	public set hotelHost(value: string) {
        this._hotelHost = value;
    }
    public get hotelHost(): string {
        return this._hotelHost;
    }
	public set loginHost(value: string) {
        this._loginHost = value;
    }
    public get loginHost(): string {
        return this._loginHost;
    }
    public set userMngHost(value: string) {
        this._userMngHost = value;
    }
    public get userMngHost(): string {
        return this._userMngHost;
    }
    public set registrationHost(value: string) {
        this._registration = value;
    }
    public get registrationHost(): string {
        return this._registration;
    }
    public set staticContentHost(value: string) {
        this._registration = value;
    }
    public get staticContentHost(): string {
        return this._registration;
    }
}