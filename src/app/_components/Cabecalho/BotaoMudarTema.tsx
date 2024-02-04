import React, { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

const BotaoTema: React.FC = () => {
  const [isDarkTheme, setDarkTheme] = useLocalStorage('darkTheme', true);
  const [enabled, setEnabled] = useState(isDarkTheme);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  const handleThemeChange = (enabled: boolean) => {
    setDarkTheme(prev => !prev);
    setEnabled(!enabled);
  };

  return (
    <div>
      <input
        onChange={e => handleThemeChange(e.target.value === 'on')}
        checked={enabled}
        className="opacity-0 absolute w-[104px] h-[32px] cursor-pointer z-10"
        type="checkbox"
        id="checkbox"
      />
      <label
        htmlFor="checkbox"
        className="relative w-[104px] h-[32px] flex rounded-3xl bg-blackbg ring-blackbg ring-1 dark:bg-whitebg justify-between items-center p-1.5 duration-300"
      >
        <p className="hidden dark:block text-[10px] font-semibold text-text duration-300">
          Modo escuro
        </p>
        <p className="block dark:hidden ml-8 text-[10px] font-semibold text-whitebg duration-300">
          Modo claro
        </p>

        <div className="bg-whitebg dark:bg-blackbg h-7 w-7 absolute top-[2px] left-[2px] rounded-[20px] translate-x-0 dark:translate-x-[71px] duration-300"></div>
      </label>
    </div>
  );
};

export default BotaoTema;

