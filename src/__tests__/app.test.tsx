import { render } from '@testing-library/react';
import { getModeFromLocalStorage } from '@/app/lib';
import { App } from '../app';

test('renders app', () => {
  const { container } = render(<App />);

  expect(container).not.toBeNull();
});

test('should get value from localstorage', () => {
  jest.spyOn(localStorage, 'getItem');
  localStorage.getItem = jest.fn().mockReturnValueOnce('dark');

  const mode = getModeFromLocalStorage();

  expect(mode).toBe('dark');
});
