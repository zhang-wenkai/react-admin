// 定义发送请求的函数
import ajax from './ajax'

// const prefix = 'http://localhost:5000'
// 提取公共代码url地址，并通过webpake定义的环境变量process.env.NODE_ENV解决跨域
// console.log(process.env.NODE_ENV);  // development  production
const prefix = process.env.NODE_ENV === 'development' ? '' : 'http://localhost:5000'
// 请求登录函数
export const reqLogin = (username,password) => ajax(prefix + '/login', {username, password}, 'POST')
// 请求添加用户函数
export const reqAddUser = user => ajax(prefix + '/manage/user/add', user, 'POST')
