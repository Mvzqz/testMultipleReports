import {test, expect} from '@playwright/test'

for (let i = 0; i < 10; i++) {
  test(`test ${i}`, async({ page }) => {
      console.log("TEST")
      expect(1).toBe(1)
    })
}
