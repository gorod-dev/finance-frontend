import { fireEvent, waitFor } from '@testing-library/react';
import { renderWithTheme } from '@/shared/lib/test-utils';
import AuthPage from '../pages/auth';

describe('test auth page', () => {
  it('should render auth page', () => {
    const { container } = renderWithTheme(<AuthPage />);

    expect(container).not.toBeNull();
  });

  it('should change form values', async () => {
    const { container } = renderWithTheme(<AuthPage />);

    const loginInput = container.querySelector(
      'input[name="login"]',
    ) as HTMLInputElement;
    const passwordInput = container.querySelector(
      'input[name="password"]',
    ) as HTMLInputElement;
    const button = container.querySelector(
      'button[type="submit"]',
    ) as HTMLButtonElement;

    expect(loginInput).toBeVisible();
    expect(passwordInput).toBeVisible();
    expect(button).toBeVisible();

    expect(await container.querySelector('#password-helper-text')).toBeNull();

    fireEvent.change(loginInput, {
      target: {
        value: 'Логин',
      },
    });

    await waitFor(() => {
      expect(loginInput.value).toBe('Логин');
      expect(passwordInput.value).toBe('');
    });

    expect(
      await container.querySelector('#password-helper-text'),
    ).toBeVisible();

    fireEvent.change(passwordInput, {
      target: {
        value: 'Пароль',
      },
    });

    await waitFor(() => {
      expect(loginInput.value).toBe('Логин');
      expect(passwordInput.value).toBe('Пароль');
    });
  });
});
