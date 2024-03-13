import React from "react"

const inject =obj=> Comp => props => <Comp {...obj} {...props} />
export {inject}

//装饰器工具使用方式---例如login.js下：
//@inject({service})
//@observer  必须紧紧靠着组件
//class _Login extends React.Component{}


////////////////////////////////////
//目标
// export default class Login extends React.Component{
//     render(){
//       return <_Login service={service} />
//     }
//   }

//柯里化简化如下
// const inject = service => Comp =>
//   class extends React.Component{
//     render(){
//       return <_Login service={service} />
//     }
//   }
// inject(1)("组件") =》 新组件


////////////////////////////////////

