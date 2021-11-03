function receivesAFunction(callback) {
    callback();
    console.log("this invokes a callback function");
}


function returnsANamedFunction() {
    return function namedFunction() {
        console.log("this returns a named function");
    };
}

function returnsAnAnonymousFunction() {
    return () => console.log("this is an anonymous function")
}