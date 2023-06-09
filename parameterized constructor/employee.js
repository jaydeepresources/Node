var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        console.log('parameterized constructor invoked...');
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.print = function () {
        console.log('Id:' + this.id);
        console.log('Name:' + this.name);
        console.log('Salary:' + this.salary);
    };
    return Employee;
}());
var e1 = new Employee(1, 'John', 10000.00);
var e2 = new Employee(2, 'Adams', 89162.23);
var e3 = new Employee(3, 'Paul', 65443.34);
var employees = [e1, e2, e3];
employees.forEach(function (employee) {
    employee.print();
});
