"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StaffManager = /** @class */ (function () {
    function StaffManager() {
        this.listStaff = [];
    }
    StaffManager.prototype.addStaff = function (staff) {
        this.listStaff.push(staff);
    };
    StaffManager.prototype.showList = function () {
        console.table(this.listStaff);
    };
    return StaffManager;
}());
exports.default = StaffManager;
