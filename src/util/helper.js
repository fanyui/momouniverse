export default {

    //for making a get request
    get: (url) => {
        return fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })

    },
    
    post: (url, body, headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }) => {
        return fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body),
        })

    },
}