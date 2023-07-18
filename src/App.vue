

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import axios  from 'axios';
import {store} from '../src/store.js'

export default {
  name: "App",
  components:{
    Header,
    Main,
    Footer,
  },
  data(){
    return{
        store,
        // card: [],
    }
  },
  methods: {

  },
  created(){
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0', {
        params:{
            status: this.store.searchType
        }

    })
      .then(response => {
        console.log(response.data.data)
         this.store.cards = response.data.data
         this.store.cardsCount = this.store.cards.length

      });

  }
}
</script>

<template>
  <Header />

  <Main
      />
      <!-- :card="card" 
     :cardCount="card.length" -->
   

  <Footer  />
</template>

<style lang="scss" >
@use "./assets/scss/main.scss";
</style>
