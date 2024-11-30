const promise = Promise.resolve(Promise.resolve('hello'));
console.log(promise); // Promise {<resolved>: "hello"}
