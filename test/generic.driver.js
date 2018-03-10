const genericDriver = page => ({
  navigate: () => page.goto('http://localhost:3000'),
  newGame: async (player1, player2) => {
    await page.type('[data-hook="p1-input"]', player1);
    await page.type('[data-hook="p2-input"]', player2);
    await page.click('[data-hook="new-game"]');
  },
  clickACellAt: index => page.$$eval('[data-hook="cell"]', (cells, i) => cells[i].click(), index),
  getACellValueAt: index =>
    page.$$eval('[data-hook="cell"]', (cells, i) => cells[i].innerText, index),
  hasWinner: async () => !!await page.$('[data-hook="winner-message"]'),
});

module.exports = genericDriver;