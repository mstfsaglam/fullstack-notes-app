const { test, expect } = require('@playwright/test')
const { describe } = require('node:test')

describe('Note app', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('http://localhost:5173')

    const locator = page.getByText('Notes')
    await expect(locator).toBeVisible()
    await expect(page.getByText('Note app, Department of Computer Science,  University of Helsinki 2026')).toBeVisible()
  })

  test('user can log in', async ({ page }) => {
    await page.goto('http://localhost:5173')

    await page.getByRole('button', { name: 'login' }).click()

    await page.getByLabel('username').fill('mustafa')
    await page.getByLabel('password').fill('Mustafa0*')

    await page.getByRole('button', { name: 'login' }).click()

    await expect(page.getByText('mustafa logged in')).toBeVisible()
  })

})


