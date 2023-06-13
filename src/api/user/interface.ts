interface baseInfo {
    code: number,

}


export interface LoginParams {
    username: string
    password: string
}

export interface LoginInfo extends baseInfo {
    data: LoginData
}

interface LoginData {
    token: string
}

export interface ListInfo extends baseInfo {
    data: UserInfo
}
interface UserInfo {
    checkUser: {
        userId: string
        avatar: string
        username: string
        password: string
        desc: string
        roles: string[]
        buttons: string[]
        routes: string[]
        token: string
    }
}