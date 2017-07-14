<template>
    <input type='text' id='mask' :value="value" :placeholder="placeholder" v-model="query" @input="_doInput(query)">
</template>

<script>
    import $ from 'jquery'
    import 'jquery-mask-plugin'

    export default {

      name: 'vue-currency',

      data () {
          return {
              query: ''
          }
      },

        /*
      watch: {

          query (value) {
              return this.$parent.$data[this.model] = value
          }
      }, */

      props: {

          model: {
              type: String
          },

          value: {
              type: [Number, String]
					},

					placeholder: {
							type: String
					},

				  customClass: {
						type: String
					}
      },

      mounted () {
          this._setupCurrency()
      },

      methods: {

          _setupCurrency () {
              this.$nextTick(() => {
                  $('#mask').mask('000.000.000.000.000', { reverse: true})
              })
          },

          _doInput (query) {
              this.$parent.$data[this.model] = query
          }
      }
    }
</script>
