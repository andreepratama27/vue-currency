import Vue from 'vue'
import VueCurrency from '../src/vue-currency.vue'

describe('vue currency', () => {

  it('will return a dom', () => {
    const Component = Vue.extend(VueCurrency)
    const compon = new Component({
      class: 'form-control',
      placeholder: 'Input currency'
    }).$mount()

    expect(compon).toBeTruthy()
  })

  it('must have methods', () => {
    expect(VueCurrency.methods).toBeTruthy()
  })

  it('methods must be function', () => {
    console.log(VueCurrency.methods)
  })

})
