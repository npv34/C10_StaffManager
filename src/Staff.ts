class Staff {
    private _name: string;
    private _age: number;
    private _email: string;
    // access modifiers: public > protected > private
    constructor(name: string, age: number, email: string) {
        this._name = name;
        this._age = age;
        this._email = email;
    }

    get name() { return this._name; }

    public getInfo(): string {
        return this._name + ' ' + this._age + ' ' + this._email;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

}

export default Staff;