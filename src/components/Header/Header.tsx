import { FC } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import Button from '../ui/Button';
import { cn } from '@/lib/utils';
import { HeaderProps } from './contract';
import { navigationMenuItems } from './constants';

const Header: FC<HeaderProps> = ({ className }) => (
  <header className={cn('fixed top-0 left-0 w-full z-40 transition-all duration-300 ease-in-out py-4 px-6 md:px-10', 'bg-background/80 backdrop-blur-md shadow-sm', className)}>
    <div className="container flex items-center justify-between">
      <a href="#hero" className="text-xl font-bold tracking-tight hover:text-primary transition-colors">
        Facundo Zarate Uguet
      </a>

      <NavigationMenu.Root className="hidden md:block">
        <NavigationMenu.List className="flex items-center space-x-8">
          {navigationMenuItems.map(({ name, href }) => (
            <NavigationMenu.Link key={name} href={href} className="text-sm font-medium hover:text-primary transition-colors">
              {name}
            </NavigationMenu.Link>
          ))}
        </NavigationMenu.List>
      </NavigationMenu.Root>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button className="md:hidden">
            <HamburgerMenuIcon />
          </Button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className={cn(
              'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
              'w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md p-2'
            )}
          >
            {navigationMenuItems.map(({ name, href }) => (
              <DropdownMenu.Item
                key={name}
                className={cn(
                  'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                  'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md p-2'
                )}
              >
                <a href={href} className="block text-sm">
                  {name}
                </a>
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  </header>
);

export default Header;
