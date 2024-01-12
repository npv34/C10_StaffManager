"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StaffManager = /** @class */ (function () {
    function StaffManager() {
    }
    StaffManager.addStaff = function (staff) {
        StaffManager.listStaff.push(staff);
    };
    StaffManager.showList = function () {
        console.table(StaffManager.listStaff);
    };
    StaffManager.deleteStaff = function (index) {
        StaffManager.listStaff.splice(index, 1);
    };
    StaffManager.findStaff = function (email) {
        return StaffManager.listStaff.filter(function (item) { return item.email === email; });
    };
    StaffManager.listStaff = [];
    return StaffManager;
}());
exports.default = StaffManager;
