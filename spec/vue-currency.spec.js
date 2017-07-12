import Vue from 'vue'
import { mount } from 'avoriaz'
import VueCurrency from '../src/vue-currency.vue'

describe('vue currency', () => {

  it('will return a dom', () => {
    const compon = mount(VueCurrency, {
      propsData: {
        class: 'form-control',
        placeholder: 'input currency'
      }
    })
    expect(compon).toBeTruthy()
  })
})
