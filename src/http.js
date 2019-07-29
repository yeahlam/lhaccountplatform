import axios from 'axios'
import {Indicator, Toast} from 'mint-ui';

let http = axios.create({
    timeout: 60000
    // headers: {}
})
http.interceptors.request.use(
    req => {
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        });
        return req
    },
    err => {
        return Promise.reject(err)
    }
);
http.interceptors.response.use(
    res => {
        Indicator.close();
        return res;
    },
    err => {
        Indicator.close();
        Toast('服务器错误')
        return Promise.reject(err)
    }
)

export default http
