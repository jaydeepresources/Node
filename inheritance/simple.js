var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(name, price) {
        this.name = name;
        this.price = price;
    }
    Vehicle.prototype.accelerate = function () {
        console.log('Vehicle is speeding up');
    };
    Vehicle.prototype.print = function () {
        console.log("Name: " + this.name);
        console.log("Price: " + this.price);
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(name, price, gearType) {
        var _this = _super.call(this, name, price) || this;
        _this.gearType = gearType;
        return _this;
    }
    Car.prototype.accelerate = function () {
        console.log('Car is speeding up');
    };
    Car.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("Gear Type: " + this.gearType);
    };
    return Car;
}(Vehicle));
var c = new Car('City', 121212, 'Auto');
c.print();
