import {test, expect} from '@playwright/test'

for (let i = 0; i < 10; i++) {
  test(`test ${i}`, async({ page }) => {
      console.log(`test ${i}`)
      expect(i%2).toBe(0)
    })
}
