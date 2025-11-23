const length = 10000;
const min = -10000;
const max = 10000;

let randomNumbersArray = [];

for (let i = 0; i < length; i++) {
    const randomNumber = Math.round(Math.random() * (max - min)) + min;
    randomNumbersArray.push(randomNumber);
};

// 1.

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            };
        };

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    };

    return arr;
};

console.time("Time");
console.log("1. The 6 largest elements:", selectionSort(randomNumbersArray.slice()).slice(-6));
console.timeEnd("Time");

// 2.

function findTop6_1(arr) {
    let top6 = [];

    for (let num of arr) {
        if (top6.length < 6) {
            top6.push(num);
            top6.sort((a, b) => a - b);
        } else {
            if (num > top6[0]) {
                top6[0] = num;
                top6.sort((a, b) => a - b);
            };
        };
    };

    return top6;
};

console.time("Time");
console.log("2. The 6 largest elements:", findTop6_1(randomNumbersArray));
console.timeEnd("Time");

// 3.

function findTop6_2(arr) {
    let top6 = [];

    for (let k = 0; k < 6; k++) {
        let maxIndex = 0;

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > arr[maxIndex]) {
                maxIndex = i;
            };
        };

        top6.push(arr[maxIndex]);

        arr[maxIndex] = -Infinity;
    };

    return top6.sort((a, b) => a - b);
};

console.time("Time");
console.log("3. The 6 largest elements:", findTop6_2(randomNumbersArray));
console.timeEnd("Time");
