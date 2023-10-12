
const dateFormat = function (date) {
    const dte = new Date(date);
    return `${dte.getDate()}, ${dte.getMonth() + 1}, ${dte.getFullYear()}`
}
const checkDate = function (a, b) {
    const aa = dateFormat(a);
    const bb = dateFormat(b);
    return aa === bb;
}
const getJson = async function (url, err = "something went wrong") {
    try {
        const response = await fetch(url);
        if (response.status === 403)
            throw (`${err},you're loading too fast (${data.status})`);
        if (response.status === 404)
            throw (`${err}, not found(fuck you)`);
        return response.json();
    } catch (er) {
        throw (er);
    }

    // return new Promise(function (resolve, reject) {
    //     fetch(url)
    //         .then((data) => {
    //             if (data.status === 403) {
    //                 reject(`${err},you're loading too fast (${data.status})`);
    //             }
    //             if (data.status === 404) {
    //                 reject(`${err}, not found(fuck you)`);
    //             }
    //             resolve(data.json());
    //         });
    // })
}


const getCurrentPosition = function () {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}
//////////////////////////////////
const getAzan = async function () {
    try {
        const loc = await getCurrentPosition();
        // get time and place
        const date = new Date();
        const curDate = `${date.getFullYear()}/${date.getMonth() + 1}`;
        const { latitude: lat, longitude: lng } = loc.coords;

        const response = await getJson(`http://api.aladhan.com/v1/calendar/${curDate}?latitude=${lat}&longitude=${lng}&method=5`);

        let [{ timings }] = response.data.filter(ele => {
            if (checkDate(ele.date.readable, new Date()))
                return ele;
        })
        if (!timings)
            throw ("not valid link");
        console.log(timings);
    } catch (err) {
        console.log(err);
    }
    // getCurrentPosition()
    //     .then((loc) => {
    //         // get time and place
    //         const date = new Date();
    //         const curDate = `${date.getFullYear()}/${date.getMonth() + 1}`;
    //         const { latitude: lat, longitude: lng } = loc.coords;


    //         return getJson(`http://api.aladhan.com/v1/calendar/${curDate}?latitude=${lat}&longitude=${lng}&method=5`)
    //             .then(response => {
    //                 let [{ timings }] =
    //                     response.data.filter(ele => {
    //                         if (checkDate(ele.date.readable, new Date()))
    //                             return ele;
    //                     })
    //                 if (!timings)
    //                     throw ("not valid link");
    //                 return timings;

    //             })
    //             .then(ele => console.log(ele))
    //             .catch(err => console.log(err))
    //     });
}
getAzan();