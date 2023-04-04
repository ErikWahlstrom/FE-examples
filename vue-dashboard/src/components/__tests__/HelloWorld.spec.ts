import { describe, it, expect, vitest } from 'vitest'

import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import DimensionCardVue from '../DimensionCard.vue'
import { setActivePinia } from 'pinia'
import { useMeasureStore } from '@/stores/measureItems'

const data = {
  average: 5.3,
  max: 6.3,
  min: 3.7,
  name: "DimensionLastThing",
  standardDeviation: 0.13,
  values: [5.1, 5.4, 5.1, 5.9, 5.1, 5.9],
}

describe('HelloWorld', () => {
  it('renders properly', () => {
    // const pinia = createTestingPinia()
    // setActivePinia(pinia)
    // const myStore = useMeasureStore()


    const wrapper = mount(DimensionCardVue, { global: {
      plugins: [
        createTestingPinia({
          initialState: {
            selectedItem: { n: 20 }, // start the counter at 20 instead of 0
          },
        }),
      ],
    },
    props: { dimension: data } })
    
    expect(wrapper.text()).toContain(data.name)
  })
})
