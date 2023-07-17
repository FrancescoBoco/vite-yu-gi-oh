<script>
export default {
  data(){
    return{
    }
  },
  methods: {

  },
  props: {
    card: {
        type: Array,
    },

    cardCount: {
        type: Number,
    }
  }
}

</script>

<template>
    <div class="container">
        <div>
            <select name="cars" id="cars">
                <option value="volvo">Alien</option>
                <option value="saab">Human</option>
                <option value="mercedes">Roboot</option>
             </select>
        </div>
        <div class="row">
            <div class="col">
                <div class="container">
                    <div class="row col text-center">
                        <strong>
                            found {{ cardCount  }} card
                        </strong>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3"
            v-for="(card, i) in card " :key="i">
                <div>
                    <img :src="card.card_images[1]" alt="">
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


</template>


<style lang="scss" scoped>
.my-container{
    max-width: 1200px;
    margin: 0 auto;
    div{
        padding: 20px 0px 20px 0px;
    }
    
}
</style>