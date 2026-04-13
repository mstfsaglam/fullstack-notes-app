const { test, expect, describe, beforeEach } = require('@playwright/test')

describe('Note app', () => {
  beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173')
  })

  test('front page can be opened', async ({ page }) => {
    const locator = page.getByText('Notes')
    await expect(locator).toBeVisible()
    await expect(page.getByText('Note app, Department of Computer Science,  University of Helsinki 2026')).toBeVisible()
  })

  test('user can log in', async ({ page }) => {
    await page.getByRole('button', { name: 'login' }).click()
    await page.getByLabel('username').fill('mustafa')
    await page.getByLabel('password').fill('Mustafa0*')
    await page.getByRole('button', { name: 'login' }).click()
    await expect(page.getByText('mustafa logged in')).toBeVisible()
  })

  describe('when logged in', () => {
    beforeEach(async ({ page }) => {
      await page.getByRole('button', { name: 'login' }).click()
      await page.getByLabel('username').fill('mustafa')
      await page.getByLabel('password').fill('Mustafa0*')
      await page.getByRole('button', { name: 'login' }).click()
    })

    test('a new note can be created', async ({ page }) => {
      await page.getByRole('button', { name: 'new note' }).click()
      await page.getByLabel('content').fill('test with playwright !')
      await page.getByRole('button', { name: 'save' }).click()

      await expect(page.getByText('test with playwright !')).toBeVisible()
    })
  })

})