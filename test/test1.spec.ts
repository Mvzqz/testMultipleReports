import {test, expect} from '@playwright/test'
  let i= 1
  test(`test ${i}`, async({ page }) => {
      console.log(`test ${i}`)
      expect(i%2).toBe(0)
    })
