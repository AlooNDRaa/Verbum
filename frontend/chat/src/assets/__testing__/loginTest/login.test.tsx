import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'; // Añade este import
import LoginForm from '../../Componentes/login/forms/form';

const mockFetch = jest.fn().mockResolvedValue({
  status: 200,
  json: async () => ({ token: 'testToken' }),
});

beforeEach(() => {
  global.fetch = mockFetch;
});

afterEach(() => {
  jest.clearAllMocks();
});

test('envía el formulario correctamente y redirige al usuario', async () => {
  render(
    <MemoryRouter>
      <LoginForm />
    </MemoryRouter>
  );

  fireEvent.change(screen.getByPlaceholderText('Enter your Email'), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByPlaceholderText('Enter your password'), { target: { value: 'password123' } });
  fireEvent.click(screen.getByText('Sign in'));

  await waitFor(() => expect(mockFetch).toHaveBeenCalled());

  expect(screen.getByText('Welcome back')).toBeInTheDocument();
});
