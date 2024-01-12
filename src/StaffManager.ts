import Staff from "./Staff";

class StaffManager {
    private static listStaff: Staff[] = [];

    static addStaff(staff: Staff): void {
        StaffManager.listStaff.push(staff);
    }

    static showList(): void {
        console.table(StaffManager.listStaff)
    }

    static deleteStaff(index: number): void {
        StaffManager.listStaff.splice(index, 1);
    }

    static findStaff(email: string): Staff[] {
        return StaffManager.listStaff.filter(item => item.email === email);
    }
}

export default StaffManager;