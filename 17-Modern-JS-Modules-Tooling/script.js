import { azanObjectAPI } from "./azanObject.js";
const prayerTimes = await azanObjectAPI.getAzan();
console.log(prayerTimes);