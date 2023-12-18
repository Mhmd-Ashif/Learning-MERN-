# Creating Documentation for the concepts that I felt OVERWHELMING

1. Class
2. Callbacks
3. Promises
4. Async Await

---

## 1.Class in JS

A JavaScript class is a blueprint for creating objects. A class encapsulates data and functions that manipulate data.

### Class Declaration

```js
class Person {
  constructor(name, mark1, mark2) {
    this.name = name;
    this.mark1 = mark1;
    this.mark2 = mark2;
  }
  returnTotalMark() {
    return mark1 + mark2;
  }
}
```

In the Person class, the constructor() is where you can initialize the properties of an instance. JavaScript automatically calls the constructor() method when you instantiate an object of the class.

> to Create a New Object

```js
let student1 = new Person("Ashif", 98, 99);
student1.name;
//Ashif
```

> to access an Method(functions) inside the class

```js
console.log(student1.returnTotalMark());
//197
```

> **_we can Able to pass an argument to the function inside the function_**

### Static Keyword in Objects

By definition, static methods are bound to a class, not the instances of that class. Therefore, static methods are useful for defining helper or utility methods. and they can have Arguments

we can Also create a Static Property to the Class which is bound only to the class but not the property

```js
class Car {
  static incr = 0;

  constructor(brand, price) {
    (this.brand = brand), (this.price = price);
    Car.incr += 1;
  }
  static drive(age) {
    console.log("You can drive a car " + age + " years old");
  }
}

let ford = new Car("ford", 1000);
let porche = new Car("porche", 1000);
let bmw = new Car("bmw", 1000);
console.log(Car.incr);
//3
//because 3 objects are Created with the single static variable so it will be increment at each time
```
