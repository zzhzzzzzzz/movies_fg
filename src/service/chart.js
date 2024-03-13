import Axios from "../axios"
import { observable, makeAutoObservable } from "mobx"

import { Modal, message } from 'antd'

class ChartService {
    constructor() {
        makeAutoObservable(this, {
            piedata: observable,
        })
    }
    piedata = {};


    getpiedata() {
        Axios.get({ "url": "/movies/pie_data" }).then(
            value => {
                this.piedata = value.data || {}
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

