const employee = {
    name: "Joe",
    streetAddress: "123 Easy Street",
};

function updateEmployeeWithKeyAndValue(employee,key,value) {
    const newEmployee = {...employee}
    newEmployee[key] = value;
    return newEmployee;
}

updateEmployeeWithKeyAndValue(employee,
     'Sam',
'11 Broadway',
)

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
    employee[key] = value;
    return employee;
}        

function deleteFromEmployeeByKey(employee,key) {
    const newEmployee = {...employee}
    delete newEmployee[key];
    return newEmployee;
    
}

function destructivelyDeleteFromEmployeeByKey(employee,key) {
delete employee[key];
    return employee;
}