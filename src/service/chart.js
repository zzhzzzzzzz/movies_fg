import Axios from "../axios"
import { observable, makeAutoObservable } from "mobx"

import { Modal, message } from 'antd'

class ChartService {
    constructor() {
        makeAutoObservable(this, {
            piedata: observable,
            bardata: observable,
            histdata: observable,
            linedata: observable,
        })
    }
    piedata = []; //注意数据格式，可能导致刷新报错
    bardata = {};
    histdata = [];
    linedata={}


    getpiedata() {
        Axios.get({ "url": "/movies/pie_data" }).then(
            value => {
                this.piedata = value.data || []
                console.log(this.piedata, typeof (this.piedata))
                console.log("成功！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")
            }
        )
    }

    getbardata() {
        Axios.get({ "url": "/movies/bar_data" }).then(
            value => {
                this.bardata = value || {}
                console.log(this.bardata)
                console.log("成功！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")
            }
        )
    }

    gethistdata() {
        Axios.get({ "url": "/movies/hist_data" }).then(
            value => {
                this.histdata = value.time || []
                console.log("成功！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")
            }
        )
    }

    getlinedata() {
        Axios.get({ "url": "/movies/line_data" }).then(
            value => {
                this.linedata = value || {}
                console.log("成功！", value)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg || "未知错误，请联系管理员！")
            }
        )
    }

}



const chartService = new ChartService() //组件用同一个实例
export { chartService }

