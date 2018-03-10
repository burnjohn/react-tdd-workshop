const appDriver = page => ({
  getPlayer1Title: () => page.$eval('[data-hook="p1-name"]', el => el.innerText),
  getPlayer2Title: () => page.$eval('[data-hook="p2-name"]', el => el.innerText),
  getWinnerMessage: () => page.$eval('[data-hook="winner-message"]', el => el.innerText),
  hasWinner: async () => !!await page.$('[data-hook="winner-message"]'),
});

module.exports = appDriver;
