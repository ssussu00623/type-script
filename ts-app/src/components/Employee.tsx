import React from 'react';
import {Employee, EmployeeDepartment, EmployeeEmoji} from '@interfaces/common';


// 1. 
// interface EmployeeProps{
//     employees : {
//         name:string, 
//         age:number, 
//         department?:string
//         emoji?:string, 
//     }[]
// }


// 2.
/*
interface Employee {
    name: string,
    age: number,
    department?: string
    emoji?: string,
}
type EmployeeProps = {
    employees : Employee[];
}
*/
//3.
/*
interface Employee {
    name: string;
    age: number;
}
interface EmployeeDepartment extends Employee {
    department?: string;
}
interface EmployeeEmoji extends Employee {
    emoji?: string;
}
type EmployeeProps = {
    employees: (Employee | EmployeeDepartment | EmployeeEmoji)[]; 
}
    */

//4.
type EmployeeProps = {
    employees: (Employee | EmployeeDepartment | EmployeeEmoji)[];
}
const Employees: React.FC<EmployeeProps> = ({ employees }) => {
    return (
        <div>
            <h2>employeeList</h2>
            <ul>
                {
                    employees.map((employee) => (
                        <li>{employee.name}/{employee.age} /
                            {'emoji' in employee ? employee.emoji : 'department' in employee ? employee.department : ''}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Employees;

