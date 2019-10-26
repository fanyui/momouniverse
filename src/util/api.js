import helper from './helper'
const url = 'https://somedummybackend'
const momourl ="https://developer.mtn.cm/OnlineMomoWeb/faces/transaction/transaction.xhtm"
//make an api call and provide content to the ui
export function getInnitialData(page) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({ data: { name: "harisu", class: "not a student" } }), 1000)

    })
    // return helper.get(url)
    //     .then((response) => response.json())
}
export function submitExchange(succeed = 1, body = {}){
    // return helper.post(momourl, body)
    //     .then((response) => response.json())
    return new Promise((resolve, reject) => {
        if (succeed == 1)
         setTimeout(() => resolve({ data: { name: "Exchange complet", status: "success" } }), 1000)
        else{
            setTimeout(() => reject({ data: { name: "Exchange failed", status: "fail" } }), 1000)

        }
    })
}

//get the list of supported currencies from the api
export function getCurrencies(succeed = 1){
    return new Promise((resolve, reject) => {
        if (succeed === 1)
            setTimeout(() => resolve({ data: [{ name: "USD", rating: 1.5 }, { name: "FCFA", rating: 0.75 }, { name: "NAIRA", rating: 5 }, { name: "YERN", rating: 1.1 }] }), 1000)
        else{
            setTimeout(() => reject({ data: { name: "Exchange failed", status: "fail" } }), 1000)

        }
    })
}