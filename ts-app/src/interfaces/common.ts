/***************************
 * MenuList interface 
 * ************************/
export interface Menu {
    name: string,
    emoji: string,
}
export interface MenuPrice extends Menu {
    price?: number;
}
export interface MenuSource extends Menu {
    source?: string
};

/***************************
 * Employee interface 
 * ************************/

export interface Employee {
    name: string;
    age: number;
}
export interface EmployeeDepartment extends Employee {
    department?: string;
}
export interface EmployeeEmoji extends Employee {
    emoji?: string;
};

/***************************
 * LunchList interface 
 * ************************/

export interface Food {
    name: string;
    emoji: string;
}
export interface FoodListPrice extends Food {
    price?: number;
}
export interface FoodListText extends Food {
    text?: string;
} 