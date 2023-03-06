let num: number;
num = 7;
let sum: number;
sum = 0;

function fibonacci(num: number): number {
    if (num <= 1) {
        return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

document.write("so fibonacci : " + num);
for (let i = 0; i < num; i++) {
    document.write(String(fibonacci(i)));
    sum += fibonacci(i);
}
alert("tong cac so fibonacci: "+sum);