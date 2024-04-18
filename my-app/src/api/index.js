import http from '../utils/request'

//请求首页数据
export const getData = () =>{
    //返回一个promise对象
    return http.get('/home/getData')
}


//请求用户列表数据
export const getUser = (params) =>{
    //返回一个promise对象
    return http.get('/user/getUser',params)
}


//用户新增
export const addUser = (data) =>{
    //返回一个promise对象
    return http.post('/user/add',data)
}


//用户编辑
export const editUser = (data) =>{
    //返回一个promise对象
    return http.post('/user/edit',data)
}

//用户删除
export const delUser = (data) =>{
    //返回一个promise对象
    return http.post('/user/del',data)
}


export const getMenu = (data) =>{
    //返回一个promise对象
    return http.post('/permission/getMenu',data)
}