interface Drivable{
    start();
    drive();
    getPosition();
}

class Car implements Drivable{
    start(){
        return 'Start the car'
    }
    drive(){
        return 'Drive the car'
    }
    getPosition(){
        return 'Current Position of the Car'
    }
}

var car=new Car();
document.write(car.start());
document.write(car.drive());
document.write(car.getPosition());