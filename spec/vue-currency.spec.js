import Vue from 'vue'
import VueCurrency from '../src/vue-currency.vue'

const getComponent = (Component, props) => {
  const comps = Vue.extend(Component)
  const vm = new comps({ props: props}).$mount()
  return vm.$el
}

describe('vue currency', () => {

  it('will return a dom', () => {
    const compon = getComponent(VueCurrency)
    expect(compon).toBeTruthy()
  })

})
