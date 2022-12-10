import {CrudBase} from "~/crudClass";
const crudUser = new CrudBase(
  'users'
)
export const state = () => ({
  ...crudUser.variables,
  ddd: [],
});

export const mutations  = () => ({
  ...crudUser.mutations,
  setDdd(state, nv){
    state.ddd = nv
  }
});

export const actions = {
  ...crudUser.actions
};
