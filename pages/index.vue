<template>
  <b-container fluid>
    <div ><nuxt-link to="/login">Login</nuxt-link></div>
    <div><nuxt-link to="/registration">Registration</nuxt-link></div>
    <div><a href="#" @click="$auth.logout()">logout</a></div>
  </b-container>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
