import commonAPI from './commomAPI'
import SERVERURL from './serverURL'

//saveVideoAPI - post http reqst called by Add component when add button is clicked

export const saveVideoAPI = async (videoDetails) => {
    return await commonAPI("POST",`${SERVERURL}/uploadVideos`,videoDetails)
}

//getAllVideosAPI - get http request callled by View component when component displayed in browser inside it's usereffect hook

export const getAllVideosAPI = async () => {
    return await commonAPI("GET",`${SERVERURL}/uploadVideos`,"")
}

//saveHistoryAPI - post http request to http://localhost:3000/history called by videoCard component when video is played
export const saveHistoryAPI = async (historyDetails) => {
    return await commonAPI("POST",`${SERVERURL}/history`,historyDetails)
}

//getAllHistoryAPI - get http request to http://localhost:3000/history called by history component when we open it in brower
export const getAllHistoryAPI = async () => {
    return await commonAPI("GET",`${SERVERURL}/history`,"")
}

//deleteHistoryAPI - delete http request to http://localhost:3000/history called by history component when clicked on delete button
export const deleteHistoryAPI  = async (id) => {
    return await commonAPI("DELETE",`${SERVERURL}/history/${id}`,{})
}

//removeVideoAPI - delete http request to http://localhost:3000/uploadVideos called by videoCard component when clicked on delete button
export const removeVideoAPI  = async (id) => {
    return await commonAPI("DELETE",`${SERVERURL}/uploadVideos/${id}`,{})
}

//saveCategoryAPI -
export const saveCategoryAPI  = async (categoryDetails) => {
    return await commonAPI("POST",`${SERVERURL}/categories`,categoryDetails)
}
//getAllCategory
export const getAllCategoryAPI  = async () => {
    return await commonAPI("GET",`${SERVERURL}/categories`,{})
}
//deleteCategoryAPI
export const deleteCategoryAPI  = async (id) => {
    return await commonAPI("DELETE",`${SERVERURL}/categories/${id}`,{})
}
//updateCategoryAPI - put http rqst to http://localhost:3000/categories called by category component when video drop over the category
export const updateCategoryAPI  = async (categoryDetails) =>{
    return await commonAPI("PUT",`${SERVERURL}/categories/${categoryDetails.id}`,categoryDetails)
}