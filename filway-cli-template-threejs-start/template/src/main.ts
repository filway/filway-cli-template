import { Application } from './app/Application'
import './style.css'

// 判断开发环境
if (import.meta.env.DEV) {
  console.warn('Your are running in development mode.')
}

new Application()
