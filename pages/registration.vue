<template>
<b-container >
  <b-card
    align="center"
    title="Registration"
    img-alt="Image"
    img-top
    tag="article"
    class="mb-2 mt-5"
  >
    <b-card-text>
      <div class="form-input">
        <b-form-input class="input-form" v-model="form.username" type="search" placeholder="Enter your username"></b-form-input>
        <b-form-input class="input-form" v-model="form.password" type="password" placeholder="Enter your password"></b-form-input>
        <b-form-input class="input-form" v-model="form.secondPassword" type="password" placeholder="Repeat your password"></b-form-input>
      </div>
    </b-card-text>

    <b-button href="#" variant="primary">Registration</b-button>
        <b-button href="#" to="/" >Home</b-button>

  </b-card>
</b-container>
</template>

<script>
export default {
  name: "registration",
  data(){
    return{
      form:{
        username: '',
        password: '',
        secondPassword: '',
      }
    }
  }
}
</script>

<style scoped>

</style>
