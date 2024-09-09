import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/home.jsx'
import Personagem from './pages/personagem.jsx'
import Quiz from './pages/quiz.jsx'
import Videos from './pages/videos.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      
      { index: true, element: <Home/>},
      { path: 'personagem', element: <Personagem/>},
      { path: 'quiz', element: <Solucao/>},
      { path: 'videos', element: <Videos/>},
      { path: '*',element: <PageNotFound/>},
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>  
  </StrictMode>,
)
