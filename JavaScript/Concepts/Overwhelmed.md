# Creating Documentation for the concepts that I felt OVERWHELMING

1. Class
2. Async JS - Callbacks
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
  static drive() {
    console.log("This is a car Class");
  }
}

let ford = new Car("ford", 1000);
let porche = new Car("porche", 1000);
let bmw = new Car("bmw", 1000);
console.log(Car.incr); //uses Class not obj
Car.drive();

//3
//This is a car Class
//because 3 objects are Created with the single static variable so it will be increment at each time
```

---

## 2.Async JS

JS is Synchronized Which means It will execute the code one after another but async code runs parallely in a differnt thread (read documentation) and it will always execute after the main thread finished its execution

### async function is JS are

1. WebApi's -> SetTimeout() , DOM
2. Read/Writing a file
3. Fetching Api's from other websites

### **_NOTE_**

**_among multiple async code. the code which had lesser time will execute first even it is executed lately_**

```js
let pizza;
function eatPizza() {
  pizza = "🍕";
  console.log("your pizza is ready");
}

eatPizza();
console.log("eat : " + pizza);
```

### Program Explaination :

First the function call will be executed Then the
variable will be allocated and then console will print the statement

```js
let pizza;
function eatPizza() {
  setTimeout(function () {
    pizza = "🍕";
  }, 2000);
  console.log("your pizza is ready");
}

eatPizza();
console.log("eat : " + pizza);
console.log("hi there");

//Output :
//hi there
//pizza is ready
//eat : undefined
```

### Program Explained

Here first the function `eatPizza()` will be called so it will invoke the `setTimeout()` function and set the variable `pizza` after two seconds but the
`console.log("your pizza is ready");` will be printed and the `console.log("eat : " + pizza);`
will be executed but the pizza will be `undefined` because it is an sync process

> this is due to async nature of javascript visit [latenflip.com](latenflip.com/loupe) to see How the Async code works

### To Avoid this use

## 2.Callbacks

as the name says it will call the another function
when the process is finished

**_Normal Example of callback_**

```js
function square(val1,val2){
  return val1**val2
}

function cube(val1,val2){
  return val1***val2
}

function quad(val1,val2){
  return val1****val2
}

function calculate(val1,val2,cb){
  let ans = cb(val1,val2)
  console.log(ans)
}

calculate(2,2,cube)

//output : 8
```

### Program Explaination

here we will pass the function as a argument to the other function as a parameter , so that function can call the callback function and get some outcome

**_callBack in Asyn Code_**

```js
function orderPizza(callback) {
  setTimeout(function () {
    let pizza = "🍕";
    callback(pizza);
  }, 2000);
}

function eatPizza(pizza) {
  console.log("Eat : " + pizza);
}

console.log("Call pizza Shop");
orderPizza(eatPizza);
console.log("wash Dishes");

//output : call pizza shop
//wash Dishes
// Eat : 🍕
```

### Program Explaination

it will call another function when the
async function is finished we can do other tasks
and async code will run only after the sync code are done execution

### CONS : Callback HELL 💀

AKA : Pyramid of DOOM

```js
function callback1() {
  function callback2() {
    function callback3() {}
  }
}
```

**_Actual Use case_**

```js
function thing1(cb) {
  cb();
}
function thing2(cb) {
  cb();
}
function thing3(cb) {
  cb("🍕");
}
function eat(val) {
  console.log("eat : " + val);
}

thing1(function () {
  thing2(function () {
    thing3(function (param) {
      eat(param);
    });
  });
});
```

### Program explaination

Here the each function calls every other function
which is passed as a parameter this is called callback hell and it not pretty to resolve this PROMISES came

## 3.Promises

### realworld understanding of Promises:

1. getting a train ticket which is an `promise` means that you can get a ride
2. takes a ride `resolve`
3. can't able to take ride `reject`

### Three States :

1. pending (waiting) let promise = promisified()
2. fulfill(resolve) -> .then()
3. reject(reject) -> .catch()

## Using Promises

```js
function getWeather() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("sunny");
    }, 2000);
  });
}

function onSuccess(succ) {
  console.log("success : " + succ);
}

function onError() {
  console.log("Error");
}

getWeather().then(onSuccess, onError);
```

### Program Explaination

here we called the `getWeather()` function with `.then()` , (the function `getweather()` can take parameter also but we haven't used yet) . after 2s it will `resolve` and call the `onSuccess()` function and passing `sunny` as parameter which is resolved if not `reject` occurs the `onError()` will be called

### **_chaining Promises_**

chaining promises are nothing just order functions that need to exected one after the another

```js
function getWeather() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("sunny");
    }, 2000);
  });
}

function getWeatherEmoji(data) {
  return new Promise(function (resolve, reject) {
    if (data == "sunny" || data == "cloudy" || data == "rainy") {
      resolve("✅");
    } else {
      reject("❎");
    }
  });
}

function onSuccess(succ) {
  console.log("success : " + succ);
}

function onError(err) {
  console.log("Error : " + err);
}

getWeather().then(getWeatherEmoji).then(onSuccess, onError);
```

### Program Explained

**getWeather().then(getWeatherEmoji).then(onSuccess,onError)**

first it will call the `getWeather()` function `.then` it will call the `getWeatherEmoji()` with the resolved **paramater** and check conditions if it is correct the it `resolves` if not `rejects` and call the following functions `onSuccess` if not `onError` with the **parameter** resolved by the `getWeatherEmoji()`

---

here `getWeatherEmoji()` gets an **argument** and `getWeather()` passes an resolved **parameter** to the `getWeatherEmoji(data)` function

.then(cb1).then(cb2) -> the value `parameter` from `cb1` will be passed to `cb2` based upon the chaining if .then(cb2).then(cb1) it produces a error `unhandled promise occured`

### To handle Reject use .catch()

---

### Promise.all([p1,p2,p3])

each will returns a array of Promise then it can be solved later and here if any one fails then the `.catch` is used to handle the err

it produce all other promise when the highest duration take by any one of the promises is succeed

## 4.Async Await

> **NOTE**
>
> 1. Async Function will always return a Promise
> 2. Await is a Keyword only used inside the Async function
> 3. Await will always resolve

```js
async function getData() {
  return "it is a promise";
}
console.log(getData());

//Output: Promise {it is a promise}
```

### Inside Async Function

the Code will run Sequentially inside the async function inside code will wait for the Async code once it is resolved the other code will be run SIMPLE : RUNS SEQUENTIALLY

```js
function getPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Hello World");
    }, 1000);
  });
}

function usePromise(val) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(val + " 2nd promise");
    }, 1000);
  });
}

async function print() {
  const getVal = await getPromise();
  const putVal = await usePromise(getVal);
  console.log(putVal);
}

print();

/*
Output : 
after 2s
Hello world 2nd promise 
*/
```

### Program Explaination :

first it will resolve the `getPromise()` promise and then it resolves the `usePromise(getVal)` here **getVal** is a parameter which is resolved value passed by the `getPromise()` promise and then it also resolves and produce a output

> **_!!Note!!_** : this will takes place inside the async function

### Callstack

whenever the callstack reaches the await keyword the function will be suspended for the time till the promise is resolved
and it will continue the execution where it left

```js
function aPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("a promise ✅");
    }, 5000);
  });
}

function bPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("b promise ✅");
    }, 10000);
  });
}

async function getData() {
  console.log("before 1");
  const adata = await aPromise(); //callstack() enters aPromise() for 5s
  console.log(adata);
  console.log("after 1");

  console.log("before 2");
  const bdata = await bPromise(); //callstack() enters bPromise() for 10s
  console.log(bdata);
  console.log("after 2");
}

/*
Output:
before 1
function suspended/waits for 5s to resolve the promise
a promise ✅
after 1

before 2
function suspended/waits for 10s to resolve the promise
b promise ✅
after 2

TOTAL TIME : 15s
*/
```

### Handling error

Normally `await` will always resolves the promise but it will not reject the promise to solve this `try-catch method` is used to catch the rejected promise

```js
async function handlingErr() {
  try {
    //async code
  } catch (err) {
    console.log(err);
  }
}
```
