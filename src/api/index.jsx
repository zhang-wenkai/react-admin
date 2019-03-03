// 定义发送请求的函数
import ajax from './ajax'
import jsonp from 'jsonp'

// const prefix = 'http://localhost:5000'
// 提取公共代码url地址，并通过webpake定义的环境变量process.env.NODE_ENV解决跨域
// console.log(process.env.NODE_ENV);  // development  production
const prefix = process.env.NODE_ENV === 'development' ? '' : 'http://localhost:5000'
// 请求登录函数
export const reqLogin = (username,password) => ajax(prefix + '/login', {username, password}, 'POST')
// 请求添加用户函数
export const reqAddUser = user => ajax(prefix + '/manage/user/add', user, 'POST')
// 请求天气的函数
export const reqWeather = city => {
  return new Promise((resolve,reject) => {
    jsonp(`http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`,
      {},
      (err,data) => {
        if(!err){
          // 请求成功
          resolve(data.results[0].weather_data[0])
        }else{
          // 请求失败
          console.log('天气请求失败：',err)
          reject('天气请求失败~')
        }
      })
  })
}
// 请求分类列表的函数
export const reqCategories = parentId => ajax(prefix + '/manage/category/list', {parentId})
// 请求添加分类函数
export const reqAddCategory = (parentId, categoryName) => ajax(prefix + '/manage/category/add', {parentId, categoryName}, 'POST')
// 请求更新分类名称的函数
export const reqUpdateCategoryName = (categoryId, categoryName) => ajax(prefix + '/manage/category/update', {categoryId, categoryName}, 'POST')
//请求分页商品列表数据的函数
export const reqProductsList = (pageNum, pageSize) => ajax(prefix + '/manage/product/list', {pageNum, pageSize})
//请求搜索商品列表数据函数
export const reqSearchProductsList = ({pageNum, pageSize, searchType, searchName}) => ajax(prefix + '/manage/product/search', {pageNum, pageSize, [searchType]: searchName})

