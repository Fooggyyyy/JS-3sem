class Sudoku {
    constructor() {
      this.originalBoard = this.createEmptyBoard(); 
      this.board = this.createEmptyBoard(); 
    }
  
    createEmptyBoard() {
      return Array.from({ length: 9 }, () => Array(9).fill(null));
    }
    
    resetBoard() {
      this.board = JSON.parse(JSON.stringify(this.originalBoard));
    }
  
    checkRows() {
      const errors = [];
      for (let i = 0; i < 9; i++) {
        const row = this.board[i];
        if (!this.isValidSet(row)) {
          errors.push(`Ошибка в строке ${i + 1}`);
        }
      }
      return errors;
    }
  
    checkColumns() {
      const errors = [];
      for (let j = 0; j < 9; j++) {
        const column = this.board.map(row => row[j]);
        if (!this.isValidSet(column)) {
          errors.push(`Ошибка в столбце ${j + 1}`);
        }
      }
      return errors;
    }
  
    checkSquares() {
      const errors = [];
      for (let squareRow = 0; squareRow < 3; squareRow++) {
        for (let squareCol = 0; squareCol < 3; squareCol++) {
          const square = [];
          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              square.push(this.board[squareRow * 3 + i][squareCol * 3 + j]);
            }
          }
          if (!this.isValidSet(square)) {
            errors.push(`Ошибка в квадрате (${squareRow + 1}, ${squareCol + 1})`);
          }
        }
      }
      return errors;
    }
  
    isValidSet(numbers) {
      const filtered = numbers.filter(num => num !== null);
      const unique = new Set(filtered);
      return filtered.length === unique.size;
    }
  
    checkBoard() {
      const rowErrors = this.checkRows();
      const columnErrors = this.checkColumns();
      const squareErrors = this.checkSquares();
      const allErrors = [...rowErrors, ...columnErrors, ...squareErrors];
  
      if (allErrors.length === 0) {
        console.log("Игровое поле корректно, ошибок нет!");
      } else {
        console.log("Найдены ошибки:");
        allErrors.forEach(error => console.log(error));
      }
    }
  
    generateValidBoard() {
      this.board = this.createEmptyBoard();
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          const baseIndex = (i * 3 + Math.floor(i / 3) + j) % 9; 
          this.board[i][j] = numbers[baseIndex];
        }
      }
  
      this.originalBoard = JSON.parse(JSON.stringify(this.board)); 
    }
  
    printBoard() {
      console.log("Текущее игровое поле:");
  
      for (let i = 0; i < 9; i++) {
        let row = this.board[i].map((cell, j) => {
          return (j % 3 === 0 && j !== 0 ? " | " : "") + (cell === null ? "." : cell);
        }).join("");
  
        if (i % 3 === 2 && i !== 8) {
          console.log(row);
          console.log("---------------------"); 
        } else {
          console.log(row);
        }
      }
    }
  }
  
 
  const sudoku = new Sudoku();
  sudoku.printBoard();
  
  sudoku.generateValidBoard();
  sudoku.printBoard();
  
  sudoku.checkBoard();
  
  sudoku.board[0][0] = 5;
  sudoku.board[0][1] = 5;
  
  sudoku.printBoard();
  sudoku.checkBoard();
  
  sudoku.resetBoard();
  sudoku.printBoard();
  