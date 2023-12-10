import { Server as SocketServer, Socket } from 'socket.io';



  io.on("connection", (socket) => {
    let gameState = {
      board: Array(9).fill(null),
      turn: "❌",
    };
  
    socket.on("startGame", () => {
      // Inicializar el estado del juego
      gameState.board = Array(9).fill(null);
      gameState.turn = "❌";
  
      // Enviar el estado del juego a ambos jugadores
      io.emit("gameState", gameState);
    });
  
    socket.on("makeMove", (index) => {
      // Verificar si el movimiento es válido
      if (gameState.board[index] === null && gameState.turn === socket.id) {
        // Actualizar el estado del juego con el nuevo movimiento
        gameState.board[index] = gameState.turn;
        gameState.turn = gameState.turn === "❌" ? "⚪" : "❌";
  
        // Enviar el estado del juego actualizado a ambos jugadores
        io.emit("gameState", gameState);
      }
    });
  
    socket.on("endGame", () => {
      // Reiniciar el estado del juego
      gameState.board = Array(9).fill(null);
      gameState.turn = "❌";
  
      // Enviar un mensaje de fin de juego a ambos jugadores
      io.emit("gameOver", "El juego ha terminado");
  
      // Enviar el estado del juego reiniciado a ambos jugadores
      io.emit("gameState", gameState);
    });
  });
