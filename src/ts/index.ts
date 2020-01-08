import log from "./log";

log("Hello, Typescript");

Promise.resolve<number>(1).then(num => log(num.toString()));

log(JSON.stringify(Object.assign({}, { a: 1 }, { b: 2 }), null, 2));

const arr: number[] = Array.from<number>(Array<number>(5)).map(_ => 0);
log(arr.toString());
