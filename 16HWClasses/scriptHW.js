
//Домашнее задание 
// 1) Создайте класс Car. В constructor передавайте параметры: brand, model, year. Сохраните их в свойства this.brand, this.model и this.year.

class Car {
    constructor(brand,model,year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

// 2) Добавьте методы:
// getInfo(): выводит (через console.log) строку формата
// "Марка: <brand>, Модель: <model>, Год выпуска: <year>".
// startEngine(): выводит "Двигатель запущен!". 
    getInfo() {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Год выпуска ${this.year}`);
    };

    startEngine() {
        console.log("Двигатель запущен!");
}
}

// 3) Создайте несколько экземпляров класса Car, чтобы вызвать у них методы: getInfo() и startEngine()
let car1 = new Car("BMW", "X5", 2020);
let car2 = new Car("Toyota", "C567", 2021);

car2.getInfo();
car2.startEngine();
car1.getInfo();
car1.startEngine();

// 4) Создайте класс ElectricCar, наследуясь от Car. Добавьте свойство batteryCapacity (ёмкость батареи). Переопределите метод startEngine(), чтобы выводить "Электромотор запущен!".

class ElectricCar extends Car {
    
    constructor(brand,model,year,batteryCapacity) {
        super(brand,model,year);
        this.batteryCapacity = batteryCapacity;
    }
    
    getInfo() {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Год выпуска: ${this.year}, Емкость батареи: ${this.batteryCapacity}`);
    };
    startEngine() {
        console.log("Электромотор запущен!");
    }
}    

let electricCar = new ElectricCar("Toyota", "Prius", 2022, 101000);
electricCar.getInfo();
electricCar.startEngine();