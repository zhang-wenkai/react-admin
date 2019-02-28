// 封装存储的方法
import store from 'store'

const USER_KEY = 'user'

// 保存数据的方法
export const setItem = value => {
  // 数据必须存在且不能是函数
  if(value && typeof value !== 'function'){
    store.set(USER_KEY,value)
  }else{
    console.log('保存失败：存储数据为空或数据为函数')
  }
}
// 读取数据的方法
export const getItem = () => {
  const value = store.get(USER_KEY)
  return value || ''
}
// 删除数据的方法
export const removeItem = () => {
  store.remove(USER_KEY)
}
