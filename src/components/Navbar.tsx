import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

import { Button, buttonVariants } from './ui/button';
import { Menu } from 'lucide-react';
import { ModeToggle } from './mode-toggle';
import { useState } from 'react';
import { useTheme } from './theme-provider';

import LogoLight from '@/assets/fleetsync-logo.svg';
import LogoDark from '@/assets/fleetsync-logo.svg';
import React from 'react';
import { cn } from '@/lib/utils';

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: '#services',
    label: 'Our Services',
  },
  {
    href: '#faqs',
    label: 'FAQs',
  },
  {
    href: '/#contact',
    label: 'Contact Us',
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme } = useTheme();

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a rel="noreferrer noopener" href="/" className="ml-2 font-bold text-xl flex">
              {theme === 'dark' ? (
                <img src={LogoDark} alt="FleetSync Logo" className="h-8 w-8 mr-2" />
              ) : theme === 'system' ? (
                <img
                  src={window.matchMedia('(prefers-color-scheme: dark)').matches ? LogoDark : LogoLight}
                  alt="FleetSync Logo"
                  className="h-8 w-8 mr-2"
                />
              ) : (
                <img src={LogoLight} alt="FleetSync Logo" className="h-8 w-8 mr-2" />
              )}
              <span>FleetSync</span>
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="flex md:hidden h-5 w-5" onClick={() => setIsOpen(true)}>
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={'left'}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">FleetSync</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={`border-b-[1px] w-full text-left rounded-none pb-4 pt-2`}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            <NavigationMenu>
              <NavigationMenuList className="md:w-[30rem] lg:w-[30rem] xl:w-[50rem]">
                {routeList.map((route: RouteProps, i) => (
                  <a
                    rel="noreferrer noopener"
                    href={route.href}
                    key={i}
                    className={`text-[17px] ${buttonVariants({
                      variant: 'ghost',
                    })}`}
                  >
                    {route.label}
                  </a>
                ))}
                <NavigationMenuItem>
                  <Button asChild className="ml-8">
                    <a href="#contact">Join Us Today</a>
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* <div className="hidden md:flex gap-2">
            <ModeToggle />
          </div> */}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
