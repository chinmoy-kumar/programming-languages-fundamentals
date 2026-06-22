function sayHello() {
  console.log("I would like to say Hello");
}

setTimeout(() => {
  sayHello();
}, 4000);

// Although next codes is located after the setTimeout() because of javascript async nature it will not wait for setTimeout(), the event loop will send the setTimeout() to the browser/node/ban(as javascript it self can't run setTimeout() function) and continue to execute the next parts.

console.log("chaicode");

for (let index = 0; index < 10; index++) {
  console.log(index);
}
