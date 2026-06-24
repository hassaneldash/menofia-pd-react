import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';

import {
  // BrowserRouter,
  // Routes,
  // Route,
  createBrowserRouter,
  RouterProvider,
} from 'react-router';
import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/HomePage';
import UsersPage from '@/pages/UsersPage';
import SearchParametersPage from '@/pages/SearchParametersPage';
import DashboardPage from '@/pages/DashboardPage';
import PathParametersPage from '@/pages/PathParametersPage';
import LoginPage from '@/pages/LoginPage';
import NotFound404Page from '@/pages/NotFound404Page';
import { ThemeProvider } from '@/context/ThemeContext';
import ZustandUsage from '@/pages/ZustandUsage';
import { Provider } from 'react-redux';
import { store } from '@/store/redux/store';
import ReduxUsage from './pages/ReduxUsage';
import { RegisterPage } from './pages/RegisterPage';
// import UserDetailsPage from '@/pages/UserDetailsPage';

const router = createBrowserRouter([
  // Catchall/Wildcard Route
  {
    path: '*',
    element: <NotFound404Page />,
  },
  {
    path: 'register',
    element: <RegisterPage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: '',
    element: <MainLayout />,
    children: [
      // Root Route
      {
        // path: '',
        index: true,
        element: <HomePage />,
      },

      // Static Routes
      {
        path: 'users',
        element: <UsersPage />,
      },

      {
        path: 'query',
        element: <SearchParametersPage />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'zustand',
        element: <ZustandUsage />,
      },
      {
        path: 'redux',
        element: <ReduxUsage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },

      // Dynamic Route
      {
        path: 'path/:id/:name/:age',
        element: <PathParametersPage />,
      },
      {
        path: 'users/:id',
        // element: <UserDetailsPage />,
        // Lazy Loading => Code Splitting
        lazy: async () => {
          const module = await import('@/pages/UserDetailsPage');
          return {
            Component: module.default,
          };
        },
      },

      // Lazy Loading => Code Splitting
      // Loader
      {
        path: 'loader',
        lazy: async () => {
          const module = await import('@/pages/UsersLoaderPage');
          return {
            Component: module.default,
            loader: module.loader,
            ErrorBoundary: module.ErrorBoundary,
          };
        },
      },
    ],
  },

  {
    path: 'login',
    element: <LoginPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Declarative Mode */}
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
      <Routes>
        <Route path='/p2' element={<PartTwo />} />
      </Routes>
      <Routes>
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </BrowserRouter> */}
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      {/* <ThemeProvider> */}
      <Provider store={store}>
        {/* Data Mode */}
        <RouterProvider router={router} />
      </Provider>
      {/* </ThemeProvider> */}
    </ThemeProvider>
  </StrictMode>,
);

// MPA => Multiple HTMLs

// SPA + CSR =>

// npm i react-router

// Send Data Backend:
// 1. Via url
// 1.1. Path Parameters
// 1.2. Query/Search Parameters

// 2. Via Request Body (Backend)

// Navigation
// Tag
// Programming

// React => Vite
// JSX + Rules + Composition
// CSS inside JS => CSS Modules
// CSS => TailwindCSS
// Component Library => Shadcn + MUI
// Event Handling
// States => useState
// List/Collection Rendering => .map + key
// Conditional Rendering => Ternary Operator + && Logical Operator + Falsy Values
// HTTP Request => fetch API, Axios
// Routing + Navigation => React Router v7 (Data Mode)

// Props (Properties) is Static Data => Data Flow is unidirectional (Parent => Child)
// Prop Drilling => Global State Management

// ContextAPI
// Zustand
// Redux

// ContextAPI: Built-in React Features => It doesn't manage State, it only distribute State
// 1. Create Context
// 2. Create Provider (Wrap entire Application) => useState
// 3. Wrap entire Application (with Provider)
// 4. Consume State with Special Hook (v19- useContext(), v19+ use())

// Zustand: npm i zustand
// 1. Create Store (State + Actions + Special Hook)
// 2. Inside Store => Define State
// 3. Inside Store => Define Actions => functions describe how to change state (SetStateAction)

// Redux Toolkit: npm i @reduxjs/toolkit react-redux
// 1. Create Redux Store
// import { configureStore } from '@reduxjs/toolkit';

// export const store = configureStore({
//   reducer: {},
// });

// 2. Provide Redux Store to the entire Application
/* 
<StrictMode>
  <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ThemeProvider>
</StrictMode>
*/

// 3. Create a Redux Slice (Logical Grouping)
/*
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'Counter', // Internal Identifier for this Slice
  initialState: { value: 0 },

  // RTK automatically generate/create "Actions" based on Reducers
  reducers: {
    reset: (state) => {
      state.value = 0; // Immer handle Immutability under the hood/behind the scene
    },

    increase: (state) => {
      state.value += 1; // Immer handle Immutability under the hood/behind the scene
    },

    decrease: (state) => {
      state.value -= 1; // Immer handle Immutability under the hood/behind the scene
    },

    increaseByValue: (state, action) => {
      state.value -= action.payload; // Immer handle Immutability under the hood/behind the scene
    },
  },
});

// To use the automatically generate Actions => We must export Actions
export const { reset, increase, decrease, increaseByValue } = counterSlice.actions;

// We must export reducer to wire it into main store
export default counterSlice.reducer;
*/

// 4. Add Slice Reducer inside Store
/*
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/store/redux/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
*/

/*
Inside Components
Use Redux Store and Dispatch Actions => react-redux
Two main Hooks: useSelector - useDispatch

*/

// React Hook Form: npm install react-hook-form

// Deployment:
// 1. npm i gh-pages -D
// 2. Edit package.json:
