

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components:{
    Header,
    Main,
    Footer,
  },
  data(){
    return{

    }
  },
  methods: {

  }
}
</script>

<template>
  <Header />

  <Main/>
   

  <Footer/>
</template>

<style lang="scss" scoped>
@use "./assets/scss/main.scss";
</style>
