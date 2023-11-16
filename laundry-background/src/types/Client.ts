export default class Client {
    private _name: string;
    private _mobile: number;
    private _address: string;
    private _isActive: boolean;

    constructor(name: string, mobile: number, address: string, isActive: boolean){
        this._name = name;
        this._mobile = mobile;
        this._address = address;
        this._isActive = isActive;
    }

    public set name(v: string) {
        this._name = v;
    }
    public get name(): string {
        return this._name;
    }
    public set address(v: string) {
        this._address = v;
    }
    public get address(): string {
        return this._address;
    }

    public set mobile(v: number) {
        this._mobile = v;
    }

    public get mobile(): number {
        return this._mobile;
    }

    public set isActive(v: boolean) {
        this._isActive = v;
    }

    public get isActive(): boolean {
        return this._isActive;
    }



}