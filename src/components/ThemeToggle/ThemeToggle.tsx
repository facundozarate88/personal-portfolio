import { FC } from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import Button from '@/components/ui/Button';
import useTheme from '@/hooks/useTheme';

const ThemeToggle: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="fixed bottom-4 right-4 rounded-full bg-background/80 backdrop-blur-sm border shadow-md z-50 transition-all duration-300 ease-in-out hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <MoonIcon className="h-5 w-5 text-foreground" />
      ) : (
        <SunIcon className="h-5 w-5 text-foreground" />
      )}
    </Button>
  );
};

export default ThemeToggle;
