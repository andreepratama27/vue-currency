<template>
    <input type='number' id='mask' :value="nilai" :placeholder="placeholder" v-model="query" @input="_doInput()">
</template>

<script>

    export default {

      name: 'vue-currency',

      data () {
          return {
              query: '',
              nilai: ''
          }
      },

      props: {

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
          },

          _doInput () {
              const number = parseInt(this.query)

              const editing = number.toFixed(2).replace(/./g, function(c, i, a) {
                  return i && c !== '.' && ((a.length - i) % 3 === 0) ? ',' + c : c
              })

              this.nilai = editing
          }
      }
    }
</script>
