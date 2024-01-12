import StaffManager from "./src/StaffManager";
import Staff from "./src/Staff";


let staff1: Staff = new Staff("Men", 30, "men@gmail.com")
let staff2: Staff = new Staff("Manh", 24, "manh@gmail.com")
let staff3: Staff = new Staff("Hung", 28, "hung@gmail.com")

StaffManager.addStaff(staff1);
StaffManager.addStaff(staff2);
StaffManager.addStaff(staff3);

const result = StaffManager.findStaff("hung@gmail.com")

console.table(result)

