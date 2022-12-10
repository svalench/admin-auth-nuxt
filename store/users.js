import {CrudBase} from "~/crudClass";
let crudUser = {}

 crudUser = new CrudBase(
  'users',
  'users',
)


export const state = () => ({
  ...crudUser.variables,
});

export const mutations  = {
  ...crudUser.mutations,
};

export const actions = {
  ...crudUser.actions
};
