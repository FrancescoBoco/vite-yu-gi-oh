
<script>
import {store} from '../store'
import axios  from 'axios';

export default {
  data(){
    return{
        store,
    }
  },
  methods: {
    onSelect() {
        console.log(this.store.searchType)

        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0', {
        params:{
        
            archetype: this.store.searchType
        }

    })
      .then(response => {
        console.log(response.data.data)
         this.store.cards = response.data.data
         this.store.cardsCount = this.store.cards.length

      });
    }
  },
  props: {

  }
}

</script>

<template>
    <div class="wrapper">

    <div class="container ">
        <div class="py-3">
            <select v-model="store.searchType" class="" name="cars" id="cars" @change="onSelect">
                <option value="Alien">Alien</option>
                <option value="Noble Knight">Noble Knight</option>
                <option value="Melodious">Melodious</option>
             </select>
             <div >
                Prova {{ store.searchType }}
             </div>
        </div>
        <div class="row py-4 bg-white">
            <div class="row">
                <div class=" col py-1 bg-black text-light">
                    <strong>
                        found {{ store.cardsCount  }} card
                    </strong>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3"
            v-for="(card, i) in this.store.cards " :key="i">
                <div >
                    <img  class='img' :src="card.card_images[0].image_url" alt="">
                </div>
                <div>
                    <h3>
                        {{card.name}}
                    </h3>
                </div>
                <div>
                    <p>
                        {{card.archetype}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>



</template>


<style lang="scss" scoped>
.img{
    width: 100%;
}
.wrapper{
    background-color: orange;
}
.my-container{
    max-width: 1200px;
    margin: 0 auto;
    div{
        padding: 20px 0px 20px 0px;
    }
    
}
</style>