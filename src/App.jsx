import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './styles/index.scss'
import RootLayout from './layouts/RootLayout'
import HomePage from './pages/home/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
