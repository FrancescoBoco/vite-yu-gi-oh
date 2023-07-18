import {reactive} from 'vue'

export const store = reactive({
    cards: [],
    cardsCount: "",
    loading: true,
    searchType: ""
})