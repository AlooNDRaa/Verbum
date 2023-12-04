// Ejemplo de prueba de handleSubmit
/*import { render, fireEvent } from '@testing-library/react';
import {Mensajes} from '../Componentes/chat/compOpenChat/mensajes';

test('handleSubmit agrega un nuevo mensaje y emite al socket', () => {
  const { getByPlaceholderText, getByText } = render(<Mensajes />);
  const input = getByPlaceholderText('Escribir');
  const button = getByText('Enviar');

  fireEvent.change(input, { target: { value: 'Nuevo mensaje' } });
  fireEvent.click(button);

  // Realiza afirmaciones para verificar si el nuevo mensaje está en el estado y si se emitió al socket.
});*/