function receivesAFunction(spy) {
    return spy();
}

receivesAFunction(function () { "hello" });

function returnsANamedFunction() {
    return function aNamedFunction() {
        console.log('hello');
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('anon')
    }
}
