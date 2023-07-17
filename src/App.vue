

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import axios  from 'axios';

export default {
  name: "App",
  components:{
    Header,
    Main,
    Footer,
  },
  data(){
    return{
        card: []
    }
  },
  methods: {

  },
  created(){
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
      .then(response => {
        console.log(response.data.data)
         this.card = response.data.data
      });

  }
}
</script>

<template>
  <Header />

  <Main :card="card" :cardCount="card.length" />

   

  <Footer  />
</template>

<style lang="scss" >
@use "./assets/scss/main.scss";
</style>
