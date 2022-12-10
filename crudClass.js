
class CrudBase{
  constructor (name='', prefix='', host='') {
        this.modelName = name
       this.host = host || process.env.apiServer || process.env._AXIOS_BASE_URL_
        this.prefix = prefix
        this.mutations = {
          'setGetObject': this.setGetObject,
          'setList': this.setList,
        }
        this.getters= [
          this.getList,
          this.getObject
        ]
        this.actions = {
          'list': this.list,
          'get': this.get,
          'post': this.post,
          'put': this.put,
          'patch': this.patch,
          'delete': this.delete,
        }
        this.variables = {}
        this.variables[`${name}List`] = []
        this.variables[`${name}CurrentObject`] = {}
    }
    list = async ({commit}, {limit=10, offset=0, link='', params={}}={}) => {
      if(limit) params['limit'] = limit
      if(offset) params['offset'] = offset
      let list =  await $nuxt.$axios.$get(`${this.host}/${this.prefix}${link}`, {params:params})
      commit('setList', list)
      return list
    }
    get = async ({commit}, {id=null, link='', params={}}={}) => {
      let obj = await $nuxt.$axios.$get(`${this.host}/${this.prefix}${link}/${id}`, {params:params  })
      commit('setGetObject', obj)
      return obj
    }
    post = async (data={}, link='', params={}) => {
      return await $nuxt.$axios.$post(`${this.host}/${this.prefix}${link}`, data, {params: params})
    }
    put = async ( data={}, link='', params={}) => {
      return await $nuxt.$axios.$put(`${this.host}/${this.prefix}${link}`, data, {params: params})
    }
    patch = async (data={}, link='', params={}) => {
     return await $nuxt.$axios.$patch(`${this.host}/${this.prefix}${link}`, data, {params: params})
    }
    delete = async (id=null, link='', params={}) => {
     return await $nuxt.$axios.$delete(`${this.host}/${this.prefix}${link}/${id}`, {params: params})
    }
    setList = (state, nv) => {state[`${this.modelName}List`] = nv}
    setGetObject = (state, nv) => {state[`${this.modelName}CurrentObject`] = nv}
    getObject = (state) => {return state[`${this.modelName}CurrentObject`]}
    getList = (state) => {return state[`${this.modelName}List`]}
}

export {
CrudBase
}
