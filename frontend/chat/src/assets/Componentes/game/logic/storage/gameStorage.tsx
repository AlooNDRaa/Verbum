 
export const saveGameToStorage = async ({ board, turn }: { board: any[]; turn: string }) => {
  // Guardar los movimientos en el almacenamiento local
  window.localStorage.setItem('board', JSON.stringify(board));
  window.localStorage.setItem('turn', turn);

  // Enviar los movimientos al servidor
  try {
    const response = await fetch('http://localhost:3000/movimientos', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        board,
        turn,
      }),
    });

    if (response.ok) {
      console.log('Movimientos guardados en la base de datos');
    } else {
      console.error('Error al guardar los movimientos en la base de datos');
    }
  } catch (error) {
    console.error('Error en la solicitud HTTP', error);
  }
};

export const resetGameStorage = () => {
  window.localStorage.removeItem('board');
  window.localStorage.removeItem('turn');
};
 