function divideAndConquerSum(a) {
    if (a == []) {
        return 0
    }

    if(a.length == 1) {
        return a[0];
    }

    lengthThird = Math.ceil(a.length / 3);

    beginning = a.slice(0, lengthThird);
    console.log("this is the beginning " + beginning)

    middle = a.slice(lengthThird, (lengthThird*2));
    console.log(" this is the middle " + middle);

    end = a.slice((lengthThird * 2));
    console.log(" this is the end " + end);

    return divideAndConquerSum(beginning) + divideAndConquerSum (middle) + divideAndConquerSum(end)
}
console.log(divideAndConquerSum([1,7,8]))

