// @ts-check
const { test, expect } = require('@playwright/test');
import * as homePage from '../pageobjects/homePage.po';
import * as formPage from '../pageobjects/formPage.po';

test('goes through the whole flow', async ({ page }) => {
  await page.goto('http://ui-training-application.s3-website-eu-west-1.amazonaws.com/');

  await page.getByPlaceholder('User name').type('admin');
  await page.locator(homePage.passwordField).type('admin');
  await page.locator(homePage.loginButton).click();

  await formPage.fillinFirstNameField(page, 'sam');
  await formPage.fillinLastNameField(page, 'test');
  await page.locator(formPage.phoneField).type('0485157642');
  await page.locator(formPage.attendeesField).type('2');
  await page.locator(formPage.emailField).type('test@test.be');
  await page.locator(formPage.submitButton).click();

});

