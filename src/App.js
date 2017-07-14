import Vue from 'vue'
import VueCurrency from './vue-currency.vue'

export default {

  data () {
    return {
      count: ''
    }
  },

  components: {
    VueCurrency
  },

  render (h) {
    return (
      <div>
          <vue-currency class="andre" model=""></vue-currency>
      </div>
    )
  }
}
