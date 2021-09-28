import { BASE_OPTIONS } from "./config.js";

// Local Storage API
export function getStorageData(){
    let options = JSON.parse(localStorage.getItem('options'))
    return options ??= BASE_OPTIONS
}

export function setStorageData(options){
    localStorage.setItem('options', JSON.stringify(options))
}