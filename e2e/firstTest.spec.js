const { reloadApp } = require('detox-expo-helpers');

/* @NOTE:
  reloadApp deletes the app from the emulator so the user
  has a fresh instance.
*/

describe('Test suite for main app page', () => {
  beforeEach(async () => {
    await reloadApp();
  });
  it('test', async () => {
    await expect(element(by.id('test_test'))).toExist();
    await expect(element(by.id('test_test'))).toBeVisible();
  });

  it('counter exists', async () => {
      await expect(element(by.id("counter"))).toExist();
  });

  it('button press', async () => {
    await element(by.id('testButton')).tap();
    await expect(
          element(by.id("counter"))
          ).toHaveLabel('1');
  })
});
