// by importing this module:
// you get an prayer times object for your location


// Creating a module like a module Pattern
const azanObjectAPI = (function () {

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

            return timings;
        } catch (err) {
            console.log(err);
        }
    }
    // data I want public
    return {
        getAzan
    }
})();
export { azanObjectAPI }

// using await here will block everything after it untill the promise is settled
// export const prayerTimes = await getAzan();

// Solution is ⭐⭐⭐⭐
// Export the call to the funciton itself. This way if you don't use this module it won't block the execution 