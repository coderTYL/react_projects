export default class User {
    private _name: string;
    private _password: string;
    public isRemember?: boolean;
    constructor(name: string, password: string, isRemember?: boolean){
        this._name = name;
        this._password = password;
        this.isRemember = isRemember;
    }
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
    get password(): string {
        return this._password;
    }
    set password(password: string){
        this._password = password;
    }
    
}
