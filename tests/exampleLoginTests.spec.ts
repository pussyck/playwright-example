import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { url } from 'inspector';

test('Success Login', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.open()
    await loginPage.inputUserData(process.env.EMAIL!!, process.env.PASSWORD!!)
    expect(page).toHaveURL(/.*home-page/)
});

const loginFailedTestData = [
    { email: 'invalidemail', password: 'password', error: 'Неверный формат электронной почты' },
    { email: 'user@test', password: '123456', error: 'Неверный формат электронной почты' },
    { email: 'user@test.', password: '123456', error: 'Неверный формат электронной почты' },
    { email: 'example@test.com', password: 'абвййк', error: 'Пароль должен содерать только латинницу' },
    { email: 'user@example.com', password: 'password123456', error: 'Неверный электронный адрес или пароль' },
    { email: 'user@example.com', password: '', error: 'Введите пароль' },
    { email: '', password: '', error: 'Введите email и пароль' },
    { email: '', password: '123456', error: 'Введите email' }
  ];


for(const data of loginFailedTestData){
    test(`Unseccess login ${data.error}`, async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.open()
        await loginPage.inputUserData(data.email, data.password)
        expect(loginPage.errorMassage.textContent()).toEqual(data.error)
    });
}

