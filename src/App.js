import Vue from 'vue'
import VueCurrency from './vue-currency.vue'

export default {

  components: {
    VueCurrency
  },

  render (h) {
    return (
      <div>
          <vue-currency class="andre"></vue-currency>
      </div>
    )
  }
}
