<template>
<b-container >
  <b-card
    align="center"
    title="Authorization"
    img-alt="Image"
    img-top
    tag="article"
    class="mb-2 mt-5"
  >
    <b-card-text>
      <div class="form-input">
        <b-form-input class="input-form" v-model="form.username" type="search" placeholder="Enter your username"></b-form-input>
        <b-form-input @keypress.enter="userLogin" class="input-form" v-model="form.password" type="password" placeholder="Enter your password"></b-form-input>
      </div>
    </b-card-text>

    <b-button href="#" @click="userLogin" variant="primary">SignIn</b-button>
    <b-button href="#" to="/" >Home</b-button>
  </b-card>
</b-container>
</template>

<script>
export default {
  name: "login",
   layout:'login',
  data(){
    return{
      form:{
        username: '',
        password: ''
      }
    }
  },
  methods:{
    async userLogin() {
            try {
            const params = new URLSearchParams()
            params.append("username", this.form.username)
            params.append("password", this.form.password)
                let response = await this.$auth.loginWith('local', { data: params })
                console.log(response)
            } catch (err) {
                console.log(err)
            }
        },
  }
}
</script>

<style scoped>
</style>
