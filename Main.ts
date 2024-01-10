import StaffManager from "./src/StaffManager";
import Staff from "./src/Staff";


let staffManager: StaffManager = new StaffManager();

let staff1 = new Staff("Men", 30, "men@gmail.com")
let staff2 = new Staff("Manh", 24, "men@gmail.com")
let staff3 = new Staff("Hung", 28, "men@gmail.com")

staffManager.addStaff(staff1);
staffManager.addStaff(staff2);
staffManager.addStaff(staff3);

staffManager.showList();