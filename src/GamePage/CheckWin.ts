
const CheckWin = (gameStates: string[][]) => {
    // tum kazanma olasiliklari
    const winningCombinations = [
        // Sıralar (Rows)
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
    
        // Sütunlar (Columns)
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
    
        // Çaprazlar (Diagonals)
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ];
    for (const comb of winningCombinations) {
        const [a, b, c] = comb;
        const [x, y] = a;

        if (gameStates[x][y] &&
            gameStates[x][y] === gameStates[b[0]][b[1]] &&
            gameStates[x][y] === gameStates[c[0]][c[1]]) {
            return gameStates[x][y];
        }
    }
    return '';
}

export default CheckWin;