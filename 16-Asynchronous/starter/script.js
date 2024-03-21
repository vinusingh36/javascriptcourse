'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages?.eng}</p>
            <p class="country__row"><span>💰</span>${data.currencies}</p>
          </div>
        </article>`;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
}

const getJSON = (url) => {
    return fetch(url).then((response) => {

        if (!response.ok)
            throw new Error(`Country not found (${response.status})`)

        return response.json()


    })
}

const get3Country = async (c1, c2, c3) => {
    try {
        let url1 = `https://restcountries.com/v3.1/name/${c1}`
        let url2 = `https://restcountries.com/v3.1/name/${c2}`
        let url3 = `https://restcountries.com/v3.1/name/${c3}`

        const data = await Promise.all([
            getJSON(url1),
            getJSON(url2),
            getJSON(url3)
        ]);


        console.log(...data.map(d => d[0].capital));

        // const [data1] = await getJSON(url1);
        // const [data2] = await getJSON(url2);
        // const [data3] = await getJSON(url3);

        // console.log(data.capital, data.capital, data3.capital);

    } catch (error) {
        console.log(error);
    }
}
get3Country("portugal", "canada", "tanzania")

/*

const getPos = function () {
    return new Promise(function (resolve, reject) {
        //console.log(">>>>>>>>>>>>");
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

const whereAmI = async () => {
    try {
        const pos = await getPos();
        const { latitude: lat, longitude: lan } = pos.coords;
        let urlGeoCode = `https://geocode.maps.co/reverse?lat=${lat}&lon=${lan}`


        let resGeo = await fetch(urlGeoCode);
        if (!resGeo.ok) throw new Error(`Problem getting location data.`)
        let dataGeo = await resGeo.json();
        //console.log(dataGeo);

        let urlCountry = `https://restcountries.com/v3.1/name/${dataGeo.address.country}`

        let res = await fetch(urlCountry);
        if (!res.ok) throw new Error(`Problem getting country data.`)
        let data = await res.json();
        // console.log(data);
        for (let i = 0; i < data.length; i++) {
            renderCountry(data[i])
        }
        return `You are in ${dataGeo.address.city}, ${dataGeo.address.country}`;
    } catch (err) {
        console.log(">>>>>>>>>>", err.message);
        renderError(`${err.message}`);

        throw err;
    }


}



// const city=whereAmI();
// console.log(city);
// whereAmI()
//     .then((city) => console.log(city))
//     .catch((err) => console.log(err))
//     .finally(() => {
//         console.log("Finished getting location!!");
//     });

(async function () {
    try {
        let city = await whereAmI();
        console.log(`${city}`);
    } catch (error) {
        console.log(renderError);
    }
    console.log("Finished getting location........");
})();

// try {
//     let y = 1;
//     const x = 2;
//     //x = 3;
//     console.log("Try block executed");
// } catch (error) {
//     console.log(">>>>>>>>>>", error);

// }




// btn.addEventListener('click', function () {
//     whereAmI();
// })






const renderError = (msg) => {
    countriesContainer.insertAdjacentText("beforeend", msg);
    countriesContainer.style.opacity = 1;
}



const getCountryAndNeighbour = function (country) {

    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        // console.log(this.responseText);

        const [data] = JSON.parse(this.responseText);
        console.log(data);
        renderCountry(data);

        //get Neighbour country

        const neighbour = data.borders?.[0];
        console.log(neighbour);

        if (!neighbour) return;

        //ajax call 2
        const request1 = new XMLHttpRequest();
        request1.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
        request1.send();

        request1.addEventListener('load', function () {
            // console.log(this.responseText);
            const [data1] = JSON.parse(this.responseText);
            console.log(data1);


            renderCountry(data1, "neighbour")
        })

    })
}

getCountryAndNeighbour('usa');

setTimeout(() => {
    console.log(`1st timer`);
    setTimeout(() => {
        console.log(`2nd timer`);
    }, 1000)
}, 1000)



// const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

// const req = fetch(`https://restcountries.com/v3.1/name/portugal`)

// console.log(req);

// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (response) {
//         // console.log(response);
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//         renderCountry(data[0]);
//     })

// }

const getJSON = (url) => {
    return fetch(url).then((response) => {

        if (!response.ok)
            throw new Error(`Country not found (${response.status})`)

        return response.json()


    })
}

const getCountryData = function (country) {
    let url = `https://restcountries.com/v3.1/name/${country}`;

    getJSON(url)
        .then((data) => {
            console.log(data);
            renderCountry(data[0]);
            const neighbour =
                //"afalfj"
                data[0].borders?.[0];
            if (!neighbour) throw new Error("No neighbour  found!");

            let url1 = `https://restcountries.com/v3.1/alpha/${neighbour}`

            return getJSON(url1)

        }).then((data1) => {
            console.log(data1);
            renderCountry(data1[0], "neighbour")
        }).catch(err => renderError(`Something went Wrong!!!!! ${err.message}. Try Again!`)).finally(() => {
            countriesContainer.style.opacity = 1;
        })

}

btn.addEventListener('click', function () {
    getCountryData('Bharat');
})

//getCountryData('adfafa');



const position = function (lat, lan) {
    let url = `https://geocode.xyz/${lat},${lan}?geoit=json`

    fetch(url)
        .then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            console.log(`You are in ${data.alt.loc[0]}, ${data.region}`);
        }).catch((err) => {
            console.log("Error!!!!", err);
        }).finally(() => {
            console.log("Oh! we reached to the end of the page!!!!!!!!");
        })
}

position(23, 30);



console.log('Test start');

setTimeout(() => {
    console.log(`0 Sec timer`);
}, 0);

Promise.resolve('Resolved Promise 1').then((res) => {
    for (let i = 0; i < 1000000000; i++)
        return console.log(res);
});

Promise.resolve('Resolved Promise 2').then((res) => {
    return console.log(res);
})

console.log("Test end!!");



const lotteryPromise = new Promise(function (resolve, reject) {

    console.log('Lottery draw is happening!!!');
    setTimeout(function () {
        if (Math.random() >= 0.5) {
            resolve(`You won the lottery`);
        }
        else {
            reject(new Error(`You lost your money!`));
        }

    }, 2000)
});

lotteryPromise.then(res => console.log(res))
    .catch((err) => {
        console.log(err);
    })

//Promisifying setTimeout
const wait = function (second) {
    return new Promise((resolve) => {
        setTimeout(resolve, second * 1000)
    })
}

// wait(2).then(() => {
//     console.log(`I waited for 1 second`);
//     return wait(1);
// }).then(() => {
//     console.log(`i waited for 2 second`);
//     return wait(1)
// }).then(() => {
//     console.log(`i waited for 3 second`);
//     return wait(1);
// }).then(() => {
//     console.log(`i waited for 4 second`);
//     return wait(1)
// }).then(() => {
//     console.log(`i waited for 5 second`);
//     return wait(1);
// })


Promise.resolve(`abc`).then(res => console.log(res));
Promise.reject('abc').catch(x => console.error(x));




const getPos = function () {
    return new Promise(function (resolve, reject) {
        // navigator.geolocation.getCurrentPosition(pos =>
        //     resolve(pos),
        //     err => reject(err)
        // )
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

getPos().then((pos) => {
    console.log(pos.coords.latitude);
}).catch((err) => {
    console.log(err);
})

// const position = function () {

//     getPos().then((pos) => {
//         const { latitude: lat, longitude: lan } = pos.coords;
//         let url = `https://geocode.xyz/${lat},${lan}?geoit=json`;

//         return fetch(url);
//     })
//         .then((res) => {
//             return res.json();
//         }).then((data) => {
//             console.log(data);
//             console.log(`You are in ${data.country}, ${data.region}`);
//         }).catch((err) => {
//             console.log("Error!!!!", err);
//         }).finally(() => {
//             console.log("Oh! we reached to the end of the page!!!!!!!!");
//         })
// }
// position();

const wait = function (second) {
    return new Promise((resolve) => {
        setTimeout(resolve, second * 1000)
    })
}

const imgContainer = document.querySelector('.images')

const createImage = (imgPath) => {
    return new Promise((resolve, reject) => {
        let img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', () => {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener("err", () => {
            reject(new Error(`Image is not found!`))
        });
    })
}
let currentImg;
createImage('img/img-1.jpg').then((img) => {
    currentImg = img;
    console.log(`Image 1 is loaded!`);
    return wait(2);
})
    .then(() => {
        currentImg.style.display = "none";
        return createImage("img/img-2.jpg");
    })
    .then((img) => {
        currentImg = img;
        console.log(`Image 2 is loaded!`);
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = "none";
        return createImage("img/img-3.jpg");
    })
    .then((img) => {
        currentImg = img;
        console.log(`Image 3 is loaded!`);
        return wait(2);
    }).then(() => {
        currentImg.style.display = "none";
        let div = document.querySelector(".text");
        div.append("Images are finished!!!");
        div.style.transition = "3s";
        // return createImage("img/img-3.jpg");
    })
    .catch((err) => {
        console.log(`Error happened!!!!!!`, err);
    })



adding more comment to push the changes in git hub

*/


