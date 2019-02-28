import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import {getItem} from "../src/utils/storageUtils"
import MemoryUtils from '../src/utils/memoryUtils'

// 将localStorage的值读取出来，并保存在内存中
const user = getItem()
if(user && user._id){
  MemoryUtils.user = user
}

ReactDOM.render(<App />, document.getElementById('root'))