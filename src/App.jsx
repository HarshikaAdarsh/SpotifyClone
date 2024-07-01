import {
  createBrowserRouter,
  defer,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import MusicList from '@/common/components/songs';

import { fetchSongs } from '@/common/services/songs';

import Home from '@/views/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <Navigate to="/for-you" replace />,
      },
      {
        path: 'for-you',
        loader: () => {
          const promise = fetchSongs(1);
          return defer({ data: promise });
        },
        element: <MusicList />,
      },
      {
        path: 'top-tracks',
        loader: () => {
          const promise = fetchSongs(2);
          return defer({ data: promise });
        },
        element: <MusicList />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/for-you" replace />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
