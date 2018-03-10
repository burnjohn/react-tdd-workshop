const appDriver = require('./App.driver');
const getGenericDriver = require('./generic.driver');

describe('Tic Tac Toe', () => {
  let driver;
  let page;
  let genericDriver;

  beforeEach(async () => {
    page = await global.BROWSER.newPage();
    driver = appDriver(page);
    genericDriver = getGenericDriver(page);
    await genericDriver.navigate();
  });

  test('should start a new game', async () => {
    const player1 = 'Yaniv';
    const player2 = 'Computer';
    await genericDriver.newGame(player1, player2);
    const p1Name = await driver.getPlayer1Title();
    const p2Name = await driver.getPlayer2Title();
    expect(p1Name).toBe(player1);
    expect(p2Name).toBe(player2);
  });

  test('should show "X" after first player clicks', async () => {
    const player1 = 'Yaniv';
    const player2 = 'Computer';
    await genericDriver.newGame(player1, player2);
    expect(await genericDriver.getACellValueAt(0)).toBe('');
    await genericDriver.clickACellAt(0);
    expect(await genericDriver.getACellValueAt(0)).toBe('X');
  });

  test('first player should win the game', async () => {
    const player1 = 'Yaniv';
    const player2 = 'Computer';
    await genericDriver.newGame(player1, player2);
    await genericDriver.clickACellAt(0);
    await genericDriver.clickACellAt(3);
    expect(await genericDriver.hasWinner()).toBe(false);
    await genericDriver.clickACellAt(1);
    await genericDriver.clickACellAt(4);
    await genericDriver.clickACellAt(2);
    expect(await driver.getWinnerMessage()).toBe(`${player1} won!`);
  });
});
