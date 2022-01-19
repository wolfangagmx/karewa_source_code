import Vue from "vue";

const axios = require('axios');
import base from '@/api/base.api';
const namespace = 'organizations';

export default {
    list: (params = {}, onSuccess, onError) => {
        return axios.get(`${base.baseUrl}/api/${namespace}/list${params.query || ''}`, params)
            .then(onSuccess)
            .catch(onError);
    },
    save: (params = {}, onSuccess, onError) => {
        return axios.post(`${base.baseUrl}/api/${namespace}/save`, params)
            .then(onSuccess)
            .catch(onError);
    },
    delete: (params = {}, onSuccess, onError) => {
        return axios.post(`${base.baseUrl}/api/${namespace}/delete`, { "_id" : params.id })
            .then(onSuccess)
            .catch(onError);
    },
    saveUpdatedDocs: (params = {}, onSuccess, onError) => {
        return axios.post(`${base.baseUrl}/api/${namespace}/save-updated-docs`,   params )
            .then(onSuccess)
            .catch(onError);
    }
}
