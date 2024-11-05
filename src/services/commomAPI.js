import axios from "axios"

const commomAPI = async (httpMethod,url,reqbody) => {
    const reqConfig = {
        method: httpMethod,
        url,
        data : reqbody
    }
    return await axios(reqConfig).then(res=>{
        return res
    }).catch(err=>{
        return  err
    })
}

export default commomAPI
