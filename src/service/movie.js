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
            searchmovie: observable,
            searchmovies: observable,
            isSearch: observable,
            yearlabels: observable,
            yearlabels2: observable,
            yearlabels3: observable,
            allmovies: observable,
            kindlabels1: observable,
            kindlabels2: observable,
            kindlabels3: observable,
            kindlabels4: observable,
            kindlabels5: observable,
            kindlabels6: observable,
            kindlabels7: observable,
            kindlabels8: observable,
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

    searchmovie = {}
    searchmovies = {}

    isSearch = false

    yearlabels1 = {}
    yearlabels2 = {}
    yearlabels3 = {}

    kindlabels1 = {}
    kindlabels2 = {}
    kindlabels3 = {}
    kindlabels4 = {}
    kindlabels5 = {}
    kindlabels6 = {}
    kindlabels7 = {}
    kindlabels8 = {}

    allmovies = {}

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
                "url": "/movies/search/info/" + id,
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
                "url": "/movies/search/" + info,
            },
        ).then(
            value => {
                this.searchmovies = value || {}
                this.isSearch = true
                console.log("成功！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")

            }
        )
    }

    movieslist(params) {
        Axios.get(
            {
                "url": "/movies/all_movies",
                "config": {
                    "params": params
                }
            },
        ).then(
            value => {
                this.allmovies = value || {}
                console.log("成功！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")

            }
        )
    }


    labellist1(params) {
        Axios.get(
            {
                "url": "/movies/year_label1",
                "config": {
                    "params": params
                }
            },
        ).then(
            value => {
                this.yearlabels1 = value || {}
                console.log("成功！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")

            }
        )
    }

    labellist2(params) {
        Axios.get(
            {
                "url": "/movies/year_label2",
                "config": {
                    "params": params
                }
            },
        ).then(
            value => {
                this.yearlabels2 = value || {}
                console.log("成功！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")

            }
        )
    }

    labellist3(params) {
        Axios.get(
            {
                "url": "/movies/year_label3",
                "config": {
                    "params": params
                }
            },
        ).then(
            value => {
                this.yearlabels3 = value || {}
                console.log("成功！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")

            }
        )
    }


    labellist4(params) {
        Axios.get(
            {
                "url": "/movies/kind_label1",
                "config": {
                    "params": params
                }
            },
        ).then(
            value => {
                this.kindlabels1 = value || {}
                console.log("成功！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")

            }
        )
    }

    labellist5(params) {
        Axios.get(
            {
                "url": "/movies/kind_label2",
                "config": {
                    "params": params
                }
            },
        ).then(
            value => {
                this.kindlabels2 = value || {}
                console.log("成功！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")

            }
        )
    }
    labellist6(params) {
        Axios.get(
            {
                "url": "/movies/kind_label3",
                "config": {
                    "params": params
                }
            },
        ).then(
            value => {
                this.kindlabels3 = value || {}
                console.log("成功！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")

            }
        )
    }
    labellist7(params) {
        Axios.get(
            {
                "url": "/movies/kind_label4",
                "config": {
                    "params": params
                }
            },
        ).then(
            value => {
                this.kindlabels4 = value || {}
                console.log("成功！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")

            }
        )
    }
    labellist8(params) {
        Axios.get(
            {
                "url": "/movies/kind_label5",
                "config": {
                    "params": params
                }
            },
        ).then(
            value => {
                this.kindlabels5 = value || {}
                console.log("成功！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")

            }
        )
    }
    labellist9(params) {
        Axios.get(
            {
                "url": "/movies/kind_label6",
                "config": {
                    "params": params
                }
            },
        ).then(
            value => {
                this.kindlabels6 = value || {}
                console.log("成功！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")

            }
        )
    }
    labellist10(params) {
        Axios.get(
            {
                "url": "/movies/kind_label7",
                "config": {
                    "params": params
                }
            },
        ).then(
            value => {
                this.kindlabels7 = value || {}
                console.log("成功！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")

            }
        )
    }
    labellist11(params) {
        Axios.get(
            {
                "url": "/movies/kind_label8",
                "config": {
                    "params": params
                }
            },
        ).then(
            value => {
                this.kindlabels8 = value || {}
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

