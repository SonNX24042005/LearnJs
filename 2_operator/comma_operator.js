let ans = ("JavaScript", "Python", "HTML", "CSS");
console.log(ans)

let ans1=(a=24,a++,a+=4)
console.log(ans1)

function first() {
    console.log("ham 1 da chay")
    return 1;
}

function second() {
    console.log("ham 2 da chay")
    return 2;
}

let ans2 = (first(), second());
console.log(ans2)