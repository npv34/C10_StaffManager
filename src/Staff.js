"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Staff = /** @class */ (function () {
    // access modifiers: public > protected > private
    function Staff(name, age, email) {
        this._name = name;
        this._age = age;
        this._email = email;
    }
    Object.defineProperty(Staff.prototype, "name", {
        get: function () { return this._name; },
        enumerable: false,
        configurable: true
    });
    Staff.prototype.getInfo = function () {
        return this._name + ' ' + this._age + ' ' + this._email;
    };
    Object.defineProperty(Staff.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Staff.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    return Staff;
}());
exports.default = Staff;
