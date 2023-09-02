const employee = {
    name: "Sam",
    streetAddress: "123 Easy",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployee = {...employee}
    newEmployee[key] = value
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee}
    delete newEmployee[key];
    return newEmployee;
    
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}