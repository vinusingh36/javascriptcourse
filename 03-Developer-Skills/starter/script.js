// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// let x = 10;

// console.log(`new editor is ready to use`);
/*
const calTemp = [3, 2, 4, 'error', -2, -3, -4, -5, 34];


let calTempAmp = (temps) => {
    let max = [0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;
        if (curTemp > max);
        max = curTemp;
    }
    console.log(max);
}

calTempAmp(calTemp);



const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: "celsius",
        value: 20
    }

    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);
    const kelvin = measurement.value + 273;
    return kelvin;
}

console.log(measureKelvin());

*/

let arr = [17, 20, 35];

const printForecost = function (arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += `...${arr[i]}°C in ${i + 1} days `
    }
    console.log(str);
}

printForecost(arr);