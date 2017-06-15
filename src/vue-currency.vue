<template>
    <input type='text' id='mask' :value="value" :class="class">
</template>

<script>
    import $ from 'jquery'
    import 'jquery-mask-plugin'

    export default {

      name: 'vue-currency',

      props: {

          class: {
              required: true,
              type: String
          },

          value: {
              required: true,
              type: [Number, String]
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
