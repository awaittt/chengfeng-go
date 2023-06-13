

import * as SysUserInterface from './interface'
import request from '@/utils/request'

let baseUrl = '/user/'
const SysUser = {
    Login: (data: SysUserInterface.LoginParams) => {
        return request.post<any, SysUserInterface.LoginInfo>(
            baseUrl + 'login', data
        )
    },
    Info: () => {
        return request.get<any, SysUserInterface.ListInfo>(
            baseUrl + 'info',
        )
    }

}

export { SysUser, SysUserInterface }