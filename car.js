var Car = (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        return 'Start the car';
    };
    Car.prototype.drive = function () {
        return 'Drive the car';
    };
    Car.prototype.getPosition = function () {
        return 'Current Position of the Car';
    };
    return Car;
}());
var car = new Car();
document.write(car.start());
document.write(car.drive());
document.write(car.getPosition());
