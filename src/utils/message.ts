/**
 * @Description:二次封装element plus 的message
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-15 23:12:50
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-27 23:18:22
 */

import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'
import { message, notification } from 'ant-design-vue'
/**
 * @description: 基础消息提示
 * @param {any} msg 消息内容
 * @param {any} type 消息类型
 * @return {*}
 * @author: Harria
 */
export function _message(msg: any, type: any) {
  message[type]({
    content: msg,
  })
}

/**
 * @description: 成功消息提示
 * @param {any} msg 消息内容
 * @return {*}
 * @author: Harria
 */
export function success(msg: any) {
  _message(msg, 'success')
}

/**
 * @description: 普通消息提示
 * @param {any} msg 消息提示
 * @return {*}
 * @author: Harria
 */
export function info(msg: any) {
  _message(msg, 'message')
}
/**
 * @description: 警告消息提示
 * @param {any} msg 消息内容
 * @return {*}
 * @author: Harria
 */
export function warning(msg: any) {
  _message(msg, 'warning')
}
/**
 * @description: 错误消息提示
 * @param {any} msg 消息内容
 * @return {*}
 * @author: Harria
 */
export function error(msg: any) {
  _message(msg, 'error')
}

/**
 * @description: 基础通知
 * @param {string} title 通知标题
 * @param {any} msg 通知内容
 * @param {any} type 通知类型
 * @return {*}
 * @author: Harria
 */
export function _notification(title: string, msg: any, type: any) {
  notification[type]({
    message: title,
    description: msg,
    duration: 3,
  })
}

/**
 * @description: 成功通知
 * @param {string} title 通知标题
 * @param {any} msg 通知内容
 * @return {*}
 * @author: Harria
 */
export function successNotification(title: string, msg: any) {
  _notification(title, msg, 'success')
}
/**
 * @description: 普通通知
 * @param {string} title 通知标题
 * @param {any} msg 通知内容
 * @return {*}
 * @author: Harria
 */
export function infoNotification(title: string, msg: any) {
  _notification(title, msg, 'info')
}
/**
 * @description: 警告通知
 * @param {string} title 通知标题
 * @param {any} msg 通知内容
 * @return {*}
 * @author: Harria
 */
export function warnNotification(title: string, msg: any) {
  _notification(title, msg, 'warning')
}
/**
 * @description: 错误通知
 * @param {string} title 通知标题
 * @param {any} msg 通知内容
 * @return {*}
 * @author: Harria
 */
export function errorNotification(title: string, msg: any) {
  _notification(title, msg, 'error')
}

/**
 * @description: 消息弹出框
 * @param {string} title 消息弹出框标题
 * @param {any} msg 消息弹出框内容
 * @param {string} btnName 消息弹出框按钮名称
 * @param {any} type 消息弹出框类别
 * @return {*}
 * @author: Harria
 */
export function alertBox(title: string, msg: any, btnName: string = '确定', type: any = '') {
  return ElMessageBox.alert(msg, title, {
    type: type,
    confirmButtonText: btnName,
  })
}

export function confirmBox(
  title: string,
  msg: string,
  btnName: string = '确定',
  cancelsName: string = '取消',
  type: any = ''
) {
  return ElMessageBox.confirm(msg, title, {
    type: type,
    confirmButtonText: btnName,
    cancelButtonText: cancelsName,
    closeOnClickModal: false,
    closeOnPressEscape: false,
  })
}
