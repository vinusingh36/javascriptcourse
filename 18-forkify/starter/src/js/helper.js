import { async } from "regenerator-runtime";
import { TIMEOUT_SEC } from "./config";

const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};

export const getJSON = async (url) => {
    try {
        const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);

        const data = await res.json();
        // console.log(data);

        if (!res.ok) throw new Error(`${data.message}`)
        return data;

    } catch (error) {
        throw error;
    }
}