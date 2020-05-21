import { Theme } from 'app/app.types';
import { useEffect, useState } from 'react';

export const useDarkTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK);
  const toggleTheme = (): void => {
    if (theme === Theme.LIGHT) {
      window.localStorage.setItem('theme', Theme.DARK);
      setTheme(Theme.DARK);
    } else {
      window.localStorage.setItem('theme', Theme.LIGHT);
      setTheme(Theme.LIGHT);
    }
  };

  useEffect(() => {
    const localTheme: Theme = (window.localStorage.getItem('theme') || Theme.DARK) as Theme;
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return [theme, toggleTheme];
};
