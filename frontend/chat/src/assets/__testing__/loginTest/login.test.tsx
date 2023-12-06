import { render, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from '../../Componentes/login/forms/form';
import { MemoryRouter } from 'react-router-dom';

type FetchMock = jest.Mock<Promise<Response>>;

const createFetchMock = (data: { login: string }): FetchMock => {
  return jest.fn().mockResolvedValue({
    json: () => Promise.resolve(data),
    status: 200,
  } as Response);
};

test('envía el formulario correctamente', async () => {
  const mockFetch = createFetchMock({ login: 'success' });
  global.fetch = mockFetch;

  const { getByPlaceholderText, getByText } = render( <MemoryRouter>
    <LoginForm />
  </MemoryRouter>);
  const emailInput = getByPlaceholderText('Enter your Email') as HTMLInputElement;
  const passwordInput = getByPlaceholderText('Enter your password') as HTMLInputElement;
  const submitButton = getByText('Sign in');

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(mockFetch).toHaveBeenCalledWith('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com', password: 'password123' }),
    });
  });
});
