export const saveGameToStorage = ({ board, turn }: { board: any[]; turn: string }) => {
    // guardar aqui partida
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
  }
  
  export const resetGameStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }