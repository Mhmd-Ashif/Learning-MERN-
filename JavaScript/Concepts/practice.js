// let pizza;
// function eatPizza() {
//   setTimeout(function () {
//     pizza = "🍕";
//   }, 2000);
//   console.log("your pizza is ready");
// }

// eatPizza();
// console.log("eat : " + pizza);

/*Here the SetTimout() is A asynchronous which means 
it can Execute after the synchronous code is finished 
*/

//Make the async code in seperate function using callback

// function orderPizza(callback) {
//   setTimeout(function () {
//     let pizza = "🍕";
//     callback(pizza);
//   }, 2000);
// }

// function eatPizza(pizza) {
//   console.log("Eat : " + pizza);
// }

// console.log("Call pizza Shop");
// orderPizza(eatPizza);
// console.log("wash Dishes");

/* Explaination : it will call another function when the
async function is finished we can do other tasks 
and async code will run only after the sync code are done execution
*/

// Callback Hell

// function thing1(cb) {
//   cb();
// }
// function thing2(cb) {
//   cb("🍕");
// }
// function thing3(val) {
//   console.log("Eat : " + val);
// }

// thing1(function () {
//   thing2(thing3);
// });

//PROMISES
// function getWeather() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("sunny");
//     }, 2000);
//   });
// }

// function onSuccess(succ) {
//   console.log("success : " + succ);
// }

// function onError(err) {
//   console.log("Error");
// }

// getWeather().then(onSuccess, onError);

//chaining\
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
