import { StrictMode } from "react";
import ReactDOM from 'react-dom/client'
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/home.jsx";
import Personagem from "./pages/personagem.jsx";
import Quiz from "./pages/quiz.jsx";
import Videos from "./pages/videos.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AvatarProvider } from "./context/AvatarProvider.jsx";
import { VideosProvider } from "./context/VideosProvider.jsx";
import VideoPage from "./pages/videoPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "personagem", element: <Personagem /> },
      { path: "quiz", element: <Quiz /> },
      { path: "videos", element: <Videos /> },
      { path: "/videos/:id", element: <VideoPage /> },
      // { path: '*',element: <PageNotFound/>},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AvatarProvider>
      <VideosProvider>
        <RouterProvider router={router} />
      </VideosProvider>
    </AvatarProvider>
  </StrictMode>,
);
