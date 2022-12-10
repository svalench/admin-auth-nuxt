<template>
  <v-app dark>
    <template-header />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  <template-footer />
  </v-app>
</template>

<script>
import templateHeader from '@/components/global/TempHeader.vue'
import templateFooter from '@/components/global/TempFooter.vue'
export default {
   middleware: 'auth',
  components:{
    templateHeader,
    templateFooter
  },
  data () {
    return {
      
    }
  }
}
</script>
