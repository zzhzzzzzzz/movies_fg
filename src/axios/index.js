import axios from "axios";

// axios:post axios.get  proxy:/api/users/login -> rewrite http://loaclhost:8000/users/login
// baseURL: '/api/'
export default class Axios {
    static config = {
        baseURL: '/api/',
        timeout: 3000,
    }

    //axios重新的封装
    static post(params) {   // { url:xxx , data:{} , congfig:{xxx:zzz} }
        return this.request(params, "post")
    }

    static get(params) {   // { url:xxx , params:{} , congfig:{xxx:zzz} }
        return this.request(params, "get")
    }

    static request(params, method = "get") {
        let config = {
            method,
            url: params.url
        }
        if (method == 'get') {
            config.params = config.params
        }
        if (method == 'post' && params.data) {
            config.data = params.data
        }
        config = Object.assign({}, this.config, config, params.config)
        return axios(config).then(
            response => {
                const data = response.data
                if (!data.code) { //success
                    return data //return Promise.resolve(data)
                }
                else { //failed
                    return Promise.reject(data)
                }
            }
        ).catch(
            reason => { //失败给出失败的理由
                return Promise.reject(reason)
            }
        )
    }
}


