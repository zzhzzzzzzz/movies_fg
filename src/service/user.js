 import axios from "axios"
 import Axios from "../axios"
 import {observable,makeAutoObservable} from "mobx"
 import {message} from 'antd'; 
//  import "antd/es/message/style" //用哪个组件引入哪个组件样式"antd/es/XXX"
 
class UserService {
    // @observable isLogin=false //5.0语法
    // 6.0语法
    constructor(){
        makeAutoObservable(this,{
            isLogin:observable,
            isReg:observable,
            username:observable
        })
    }
    isLogin=false;
    isReg=false;
    uname='';

    login(username,password){
        console.log("login处理用户") //ajax axios xmlhttprequest
        // ToDo 待完成代码 application/json
        // axios.post axios.get   prefix:/api/users/login -> rewrite http:localhost:8000/users/login

        Axios.post({
            "url":"/users/login",
            data:{username,password}
        }).then(
            value => {
                console.log("successful",typeof(value)) //成功处理
                this.isLogin=true
                this.uname=username
                message.info('登录成功！',2)
                console.log(this.isLogin)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg,3)
            }
        )
        console.log("login处理完成!")
    }

    reg(username,email,password,comfirmpwd){
        console.log("reg处理用户") //ajax axios xmlhttprequest
        Axios.post({
            "url":"/users/",
            data:{username,email,password,comfirmpwd}
        }).then(
            value => {
                console.log("successful") //成功处理
                this.isReg=true
                console.log(this.isReg)
                message.info("注册成功!",3)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg,3)
                
            }
        )
        console.log("reg处理完成!")
    }

    logout(){
        axios.get('/api',{url:"/users/logout"}).then(
            value => {
                this.isLogin=false
                
                console.log("退出成功！") //成功处理
                message.info("退出成功!",3)
            },
            reason => {
                console.log(reason) //失败处理，给用户友好提示
                message.warning(reason.msg,3 || "退出失败")
            }
        )
    }
 }

const userService=new UserService() //组件用同一个实例
export {userService}

