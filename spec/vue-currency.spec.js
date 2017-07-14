import Vue from 'vue'
import VueCurrency from '../src/vue-currency.vue'

describe('vue currency', () => {

  it('will return a dom', () => {
    const Component = Vue.extend(VueCurrency)
    const compon = new Component({
      class: 'form-control',
      placeholder: 'Input currency'
    }).$mount()

    assert.isOk(compon)
  })

  it('must have methods', () => {
    assert.isOk(VueCurrency.methods)
  })

  it('methods must be function', () => {
    expect(VueCurrency.methods).to.be.an('object')
  })

})
