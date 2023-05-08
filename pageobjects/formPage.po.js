export const firstNameField = 'input[data-cy="user-name"]';
export const lastNameField = 'input[data-cy="lastName"]';
export const phoneField = 'input[data-cy="phone"]';
export const attendeesField = 'input[data-cy="attendees"]';
export const emailField = 'input[data-cy="email"]';
export const submitButton = 'button[data-cy="login"]';

export async function fillinFirstNameField(page, name) {
    await page.locator(firstNameField).type(name);
}

export async function fillinLastNameField(page, name) {
    await page.locator(lastNameField).type(name);
}