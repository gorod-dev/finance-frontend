import { createTheme } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';

export const getModeFromLocalStorage = () => {
  const oldMode = localStorage.getItem('mode');
  if (oldMode !== 'light' && oldMode !== 'dark') return 'dark';
  return oldMode;
};

export const useMUITheme = () => {
  const getStoredMode = useCallback(getModeFromLocalStorage, []);

  const [mode, setMode] = useState<'dark' | 'light'>(getStoredMode());

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  const toggleTheme = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    localStorage.setItem('mode', newMode);
    setMode(newMode);
  };

  return {
    toggleTheme,
    theme,
  };
};
