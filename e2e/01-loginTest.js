export default () => describe('Login', () => {
  // beforeAll(async () => {
  //   await device.reloadReactNative();
  // });

  it('should show login screen after 2 secs', async () => {
    //Wait for 5 secs for loginView to become visible
    await waitFor(element(by.id('loginView'))).toBeVisible().withTimeout(5000);
  });

  it('should show show email field', async () => {
    await expect(element(by.id('emailField'))).toBeVisible();
  });

  it('should show show password field', async () => {
    await expect(element(by.id('passwordField'))).toBeVisible();
  });

  it('should login user with given credentials', async () => {
    const emailField = element(by.id('emailField'));
    const passwordField = element(by.id('passwordField'));
    await emailField.typeText('admin@marvel.com');
    await passwordField.typeText('zaq1xsw2');
    // Click outside to close keyboard
    await element(by.id('loginView')).tap();
    await element(by.id('loginButton')).tap();
    // Logib view should be removed after login success
    await waitFor(element(by.id('loginView'))).toBeNotVisible().withTimeout(10000);
  });
});
