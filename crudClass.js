import axios from 'axios'
import {mutations} from 'vuex'
class CrudBase{
  constructor (name='', prefix='') {
        this.modelName = name
        this.prefix = prefix
        this.mutations = {
          'setGetObject': this.setGetObject,
          'setList': this.setList,
        }
        this.getters= [
          this.getList,
          this.getObject
        ]
        this.actions = [
          this.list,
          this.get,
          this.post,
          this.put,
          this.patch,
          this.delete,
        ]
        this.variables = {}
        this.variables[`${name}List`] = []
        this.variables[`${name}CurrentObject`] = {}
    }
    list = async ({commit}, {limit=10, offset=0, link='', params={}}={}) => {
      if(limit) params['limit'] = limit
      if(offset) params['offset'] = offset
      let list =  await axios.get(`/${this.prefix}/${link}`, {params:params})
      commit('setList', list)
      return list
    }
    get = async ({commit}, {id=null, link='', params={}}={}) => {
      let obj = await axios.get(`/${this.prefix}/${link}`, {params:params})
      commit('setGetObject', obj)
      return obj
    }
    post = async (data={}, link='', params={}) => {
      return await axios.post(`/${this.prefix}/${link}`, data, {params: params})
    }
    put = async (data={}, link='', params={}) => {
      return await axios.put(`/${this.prefix}/${link}`, data, {params: params})
    }
    patch = async (data={}, link='', params={}) => {
     return await axios.patch(`/${this.prefix}/${link}`, data, {params: params})
    }
    delete = async (id=null, link='', params={}) => {
     return await axios.delete(`/${this.prefix}/${link}`, {params: params})
    }
    setList = (state, nv) => {state[`${this.modelName}List`] = nv}
    setGetObject = (state, nv) => {state[`${this.modelName}CurrentObject`] = nv}
    getObject = (state) => {return state[`${this.modelName}CurrentObject`]}
    getList = (state) => {return state[`${this.modelName}List`]}
}

export {
CrudBase
}
