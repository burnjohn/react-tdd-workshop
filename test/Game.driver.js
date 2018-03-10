const getGameMock = require('./Game.mock');
const { gameStatus } = require('../src/gameService');


const gameDriver = page => ({
  getWinnerMessage: () => page.$eval('[data-hook="winner-message"]', el => el.innerText),
  hasNoWinners: async() => {
    const boardMock = getGameMock().tieBoardMock;

    return !gameStatus('X', boardMock) && !gameStatus('O', boardMock);
  },
});

module.exports = gameDriver;
