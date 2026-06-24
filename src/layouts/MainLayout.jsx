import { Button } from '@/components/ui/button';
import { ThemeContext } from '@/context/ThemeContext';
import React, { use, useContext } from 'react';
import { NavLink, Outlet } from 'react-router';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/components/theme-provider';
import { Moon, Sun } from 'lucide-react';
const MainLayout = () => {
  // 2 Methods to consume Data from Provider
  // 1. useContext()
  // const context = useContext();

  // 2. use => React v19
  // const { theme, setTheme } = use(ThemeContext);

  const { setTheme } = useTheme();

  return (
    <div
      className='flex flex-col min-h-screen'
      // style={{
      //   backgroundColor: theme === 'light' ? '#fff' : '#333',
      //   color: theme === 'light' ? '#000' : '#fff',
      // }}
    >
      <nav className='sticky top-0 z-10 w-full border-b shadow-sm p-4 '>
        <ul className='container flex mx-auto justify-between items-center'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `font-medium ${isActive ? 'text-blue-500' : 'hover:text-blue-500'}`
              }>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/users'
              className={({ isActive }) =>
                `font-medium ${isActive ? 'text-blue-500' : 'hover:text-blue-500'}`
              }>
              Users
            </NavLink>
          </li>

          <li>
            {/* <Link to='/query?name=Nada&age=20'>Query</Link> */}
            <NavLink
              to={{ pathname: '/query', search: '?name=Hanna&age=20' }}
              className={({ isActive }) =>
                `font-medium ${isActive ? 'text-blue-500' : 'hover:text-blue-500'}`
              }>
              Query
            </NavLink>
          </li>

          <li>
            {/* <Link to='/path/1/hassan/34'>Path</Link> */}
            <NavLink
              to={{ pathname: 'path/1/hassan/34' }}
              className={({ isActive }) =>
                `font-medium ${isActive ? 'text-blue-500' : 'hover:text-blue-500'}`
              }>
              Path
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/login'
              className={({ isActive }) =>
                `font-medium ${isActive ? 'text-blue-500' : 'hover:text-blue-500'}`
              }>
              Login
            </NavLink>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='outline' size='icon'>
                  <Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
                  <Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
                  <span className='sr-only'>Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={() => setTheme('light')}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
      </nav>

      {/* <p className='text-center'>{theme}</p>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Change Theme
      </Button> */}

      <main className='container grow mx-auto p-10 max-w-3xl'>
        <Outlet /> {/* Placeholder for the injected component from Router */}
      </main>

      <footer className='border-t p-6 text-center text-sm'>
        <p>© 2026 ITI by Hassan ELDash with 💖</p>
      </footer>
    </div>
  );
};

export default MainLayout;
