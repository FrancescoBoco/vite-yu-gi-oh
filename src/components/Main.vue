
<script>
import {store} from '../store'
export default {
  data(){
    return{
        store,
    }
  },
  methods: {

  },
  props: {

  }
}

</script>

<template>
    <div class="wrapper">

    <div class="container ">
        <div class="py-3">
            <select class="" name="cars" id="cars">
                <option value="volvo">Alien</option>
                <option value="saab">Noble Knight</option>
                <option value="mercedes">Melodious</option>
             </select>
        </div>
        <div class="row py-4 bg-white">
            <div class="row">
                <div class=" col py-1 bg-black text-light">
                    <strong>
                        found {{ cardCount  }} card
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