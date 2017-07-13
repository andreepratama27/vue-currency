<template>
    <input type='text' id='mask' :value="value" :placeholder="placeholder" :class="customClass">
</template>

<script>
    import $ from 'jquery'
    import 'jquery-mask-plugin'

    export default {

      name: 'vue-currency',

      props: {

          value: {
              type: [Number, String]
					},

					placeholder: {
							required: true,
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
          }
      }
    }
</script>
