const length = 10000;
const min = -10000;
const max = 10000;

let randomNumbersArray1 = [];
let randomNumbersArray2 = [];
let randomNumbersArray3 = [];

for (let i = 0; i < length; i++) {
    const randomNumber = Math.round(Math.random() * (max - min)) + min;
    randomNumbersArray1.push(randomNumber);
    randomNumbersArray2.push(randomNumber);
    randomNumbersArray3.push(randomNumber);
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

console.time("Selection sort");
const sortedArray = selectionSort(randomNumbersArray1);
console.log("The 6-th element:", sortedArray[5]);
console.timeEnd("Selection sort");

// 2.

function findTop6(arr) {
  let top6 = [];

  for (let num of arr) {
    if (top6.length < 6) {
      top6.push(num);
      top6.sort((a, b) => b - a);
    } else {
      if (num > top6[top6.length - 1]) {
        top6[top6.length - 1] = num;
        top6.sort((a, b) => b - a);
      };
    };
  };

  return top6;
};

console.time("Selection sort");
console.log("The 6 largest elements:", findTop6(randomNumbersArray2));
console.timeEnd("Selection sort");

// 3.

