function matchfunc(n) {
    if (n === 0) {
        return "If the number of steps is 0, then the number of matchsticks is also 0"
    }
    else if (n < 0 || typeof n !== "number") {
        return "The input(n) should always be a positive INTEGER."
    }
    else {
        let a;
        a = (5 * n) + 1;
        return a;
    }
};

console.log(matchfunc(0));
console.log(matchfunc('hi'));
console.log(matchfunc(-3));
console.log(matchfunc(3));