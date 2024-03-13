import Axios from "../axios"
import { observable, makeAutoObservable } from "mobx"

import { Modal, message } from 'antd'

class MovieService {
    constructor() {
        makeAutoObservable(this, {
            success: observable,
            weekmovie: observable,
            weekmovies: observable,
            hotmovie: observable,
            hotmovies: observable,
            boxmovie: observable,
            boxmovies: observable,
            topmovie: observable,
            topmovies: observable,
            searchmovie:observable,
            searchmovies:observable,
            isSearch:observable,
        })
    }
    weekmovie = {};
    weekmovies = {};

    hotmovie = {};
    hotmovies = {};

    boxmovie = {};
    boxmovies = {};

    topmovie = {};
    topmovies = {};

    searchmovie={}
    searchmovies={}

    isSearch=false

    getWeekMovie(id) {
        Axios.get({ "url": "/movies/week/" + id, }).then(
            value => {
                this.weekmovie = value.movie || {}
                console.log("成功！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")

            }
        )
    }

    weeklist(params) {
        Axios.get(
            {
                "url": "/movies/week",
                "config": {
                    "params": params
                }
            },
        ).then(
            value => {
                this.weekmovies = value || {}
                console.log("成功！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")

            }
        )
    }

    getHotMovie(id) {
        Axios.get({ "url": "/movies/hot/" + id, }).then(
            value => {
                this.hotmovie = value.movie || {}
                console.log("成功！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")

            }
        )
    }

    hotlist(params) {
        Axios.get(
            {
                "url": "/movies/hot",
                "config": {
                    "params": params
                }
            },
        ).then(
            value => {
                this.hotmovies = value || {}
                console.log("成功！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")

            }
        )
    }

    getBoxOffice(id) {
        Axios.get({ "url": "/movies/box_office/" + id, }).then(
            value => {
                this.boxmovie = value.movie || {}
                console.log("成功！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")

            }
        )
    }

    boxofficelist(params) {
        Axios.get(
            {
                "url": "/movies/box_office",
                "config": {
                    "params": params
                }
            },
        ).then(
            value => {
                this.boxmovies = value || {}
                console.log("成功！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")

            }
        )
    }

    gettopMovie(id) {
        Axios.get({ "url": "/movies/top/" + id, }).then(
            value => {
                this.topmovie = value.movie || {}
                console.log("成功！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")

            }
        )
    }

    toplist(params) {
        Axios.get(
            {
                "url": "/movies/top",
                "config": {
                    "params": params
                }
            },
        ).then(
            value => {
                this.topmovies = value || {}
                console.log("成功！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")

            }
        )
    }

    searchMovie(id) {
        Axios.get(
            {
                "url": "/movies/search/info/"+id,
            },
        ).then(
            value => {
                this.searchmovie = value.movie || {}
                console.log("成功了！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")
            }
        )
    }

    searchlist(info) {
        Axios.get(
            {
                "url": "/movies/search/"+info,
            },
        ).then(
            value => {
                this.searchmovies = value || {}
                this.isSearch=true
                console.log("成功！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")

            }
        )
    }

}

const movieService = new MovieService() //组件用同一个实例
export { movieService }

