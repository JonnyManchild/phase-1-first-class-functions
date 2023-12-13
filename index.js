function receivesAFunction(cb) {
    return (cb())
}
function namedFunction() {
    return "nyah"
}
function returnsANamedFunction() {
    return (namedFunction)
}

function returnsAnAnonymousFunction() {
    return function() {
        return "big oofs"
    }
}