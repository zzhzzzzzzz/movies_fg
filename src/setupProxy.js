//引入中间件
const proxy = require('http-proxy-middleware');
//定义具体的转发规则
module.exports = function(app){
    app.use(
        proxy.createProxyMiddleware('/api',{
            target:'http://172.27.37.165:8000',
            changeOrigin:true,
            pathRewrite: {
                '^/api':'' //重写路由
            }
        }))
}