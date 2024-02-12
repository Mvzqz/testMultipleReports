import {test, expect,} from '@playwright/test'

for (let i = 0; i < 10; i++) {
  test(`test ${i}`, async({ page }) => {
        test.slow()
        await page.goto('https://www.whatismyip.com')

        const ipElements = await page.locator('.ip-info-line').all()
        for(const ipElement of ipElements){
            console.log(await ipElement.textContent())
        }

        await expect(page.locator('#geo')).toContainText('US')
    })
}
