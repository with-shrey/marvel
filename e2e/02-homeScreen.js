export default () => describe('Home Screen', () => {
    beforeAll(async () => {
      await device.reloadReactNative();
    });

    it('should refresh list on refresh button click', async () => {
        await waitFor(element(by.id('characterList'))).toBeVisible().withTimeout(5000);
        await element(by.id('refreshButton')).tap();
      });

    it('should show poup and logout user on button click', async () => {
        await element(by.id('logoutButton')).tap();
        await element(by.text('OK')).tap();
      });
});