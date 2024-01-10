import Staff from "./Staff";

class StaffManager {
    private listStaff: Staff[] = [];

    addStaff(staff: Staff): void {
        this.listStaff.push(staff);
    }

    showList(): void {
        console.table(this.listStaff)
    }



}

export default StaffManager;