import axios  from "axios";

const baseURL = __IS_DEV__ ? '' : '';

export const $api = axios.create({
    baseURL,
    headers: {
    }
})