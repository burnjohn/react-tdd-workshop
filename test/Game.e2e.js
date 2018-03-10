const appDriver = require('./Game.driver');
const getGenericDriver = require('./generic.driver');

describe('Game module', () => {
  let driver;
  let genericDriver;
  let page;

  beforeEach(async () => {
    page = await global.BROWSER.newPage();
    driver = appDriver(page);
    genericDriver = getGenericDriver(page);
    await genericDriver.navigate();
  });

  test('should not click on non empty cell', async () => {
    const player1 = 'Yaniv';
    const player2 = 'Computer';
    await genericDriver.newGame(player1, player2);

    await genericDriver.clickACellAt(0);
    expect(await genericDriver.getACellValueAt(0)).toBe('X');
    await genericDriver.clickACellAt(0);
    expect(await genericDriver.getACellValueAt(0)).toBe('X');
  });

  test('should be a tie', async () => {
    const player1 = 'Yaniv';
    const player2 = 'Computer';
    await genericDriver.newGame(player1, player2);

    await genericDriver.clickACellAt(0);
    await genericDriver.clickACellAt(1);
    await genericDriver.clickACellAt(2);
    await genericDriver.clickACellAt(3);
    await genericDriver.clickACellAt(4);
    await genericDriver.clickACellAt(5);
    await genericDriver.clickACellAt(6);
    await genericDriver.clickACellAt(7);
    await genericDriver.clickACellAt(8);

    expect(await genericDriver.hasWinner()).toBe(false);
    expect(await driver.hasNoWinners()).toBe(true);
  });
});