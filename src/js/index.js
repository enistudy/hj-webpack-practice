import log from "./log";

log("Hello, Webpack");

Promise.resolve(1).then(log);

log(JSON.stringify(Object.assign({}, { a: 1 }, { b: 2 }), null, 2));

log(Array.from(Array(5), _ => 0));
