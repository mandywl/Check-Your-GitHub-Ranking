import axios from 'axios';

export default function ajax(url = '', params = {}, type= 'GET') {
    let promise;
    // 1. Return promise
    return new Promise((resolve, reject)=>{
        // 1.1 Get type
        if('GET' === type.toUpperCase()){
            // 1.2 Create parameter
            let paramsStr = '';
            Object.keys(params).forEach(key =>{
                paramsStr += key + '=' + params[key] + '&'
            });
            // 1.3 Substract url before &
            if(paramsStr !== ''){
                paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'));
            }
            // 1.4 Completed url
            url += '?' + paramsStr;
            // 1.5 Send out get request
            promise = axios.get(url);
        }else if('POST' === type.toUpperCase()){
            promise = axios.post(url, params);
        }
        // 1.6 Return result
        promise.then((response)=>{
            resolve(response.data);
        }).catch(error=>{
            reject(error);
        })
    })
}