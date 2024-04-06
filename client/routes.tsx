import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Board from './components/Board'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Board />} />
  </Route>,
)

export const router = createBrowserRouter(routes)
