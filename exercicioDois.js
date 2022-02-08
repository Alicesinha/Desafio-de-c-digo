//Problema dois - Validando Sudoku

const verificaSudokuPorColuna = (sudoku) => {
    let temporaria = [];
    let sudokuInvalido = false;

    for (l = 0; l < sudoku.length; l++) {
        for (c = 0; c < sudoku.length; c++) {
            if (temporaria.indexOf(sudoku[c][l]) != -1 && sudoku[c][l] !== ".") {
                console.log("Sudoku inválido.");
                sudokuInvalido = true;
                break;
            } else {
                temporaria.push(sudoku[c][l]);
            }

            if (c == 8) temporaria = [];
        }

        if (sudokuInvalido) break;
    }

    if(!sudokuInvalido) verificaSudokuPorLinha(sudoku);
}

const verificaSudokuPorLinha = (sudoku) => {
    let temporaria = [];
    let sudokuInvalido = false;

    for (l = 0; l < sudoku.length; l++) {
        for (c = 0; c < sudoku.length; c++) {
            if (temporaria.indexOf(sudoku[l][c]) != -1 && sudoku[l][c] !== ".") {
                console.log("Sudoku inválido.");
                sudokuInvalido = true;
                break;
            } else {
                temporaria.push(sudoku[l][c]);
            }

            if (c == 8) temporaria = [];
        }

        if (sudokuInvalido) break;
    }

    if(!sudokuInvalido) console.log("Sudoku válido");
}
//na linha abaixo é possivel inserir o sudoku para verificação.
let sudoku = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    [".", ".", ".", ".", "2", ".", ".", ".", "6"],
    ["7", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

verificaSudokuPorColuna(sudoku);

