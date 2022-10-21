import { apiInstance } from "./apiInstance"

export const apiServices = {
    getAll: async (url) => {
        let responseData = [];
        await apiInstance.get(url)
        .then(res => {
            responseData = res.data;
        })
        .catch((err)=>{
            console.log('ERROR', err);
            throw err
        })
        return responseData;
    },
    getById: async (url,id) => {
        let responseData = {};
        await apiInstance.get(url + '/' + id)
            .then(res => {
                responseData = res.data;
            });
        return responseData;
    },
    add: async (url, data) =>{
        let responseData = {};
        await apiInstance.post(url,data)
            .then(res => {
                responseData = res.data;
            })
            .catch((err) => {
                throw err
            })
        return responseData;
    },
    update: async  (url, data, id) => {
        let responseData = {};

        await apiInstance.put(url + '/' + id, data)
            .then(res => {
                responseData = res.data;
            })

        return responseData;
    },
    delete: async (url, id) => {
        apiInstance.delete(url + '/' + id)
            .then(res => res.data)
            .catch((err) => {
                throw err
            })
    }
}